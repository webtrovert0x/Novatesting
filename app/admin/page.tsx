'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Lock,
  PlusCircle,
  FileText,
  Eye,
  Trash2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  LogOut,
} from 'lucide-react';
import { Post } from '@/lib/posts';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [inputPassword, setInputPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<'write' | 'list'>('write');

  // Posts list
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Investment Strategy');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'
  );
  const [authorName, setAuthorName] = useState('Advisory Team');
  const [authorRole, setAuthorRole] = useState('Senior Wealth Strategist');
  const [tags, setTags] = useState('Wealth Advisory, Strategy');
  const [featured, setFeatured] = useState(false);

  // Preview Mode
  const [previewMode, setPreviewMode] = useState(false);

  // Submit Feedback
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Check saved session on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('nova_admin_auth');
    if (saved) {
      // Verify stored password
      fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: saved }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAuthenticated(true);
            fetchPosts();
          } else {
            sessionStorage.removeItem('nova_admin_auth');
            setIsAuthenticated(false);
          }
        })
        .catch(() => {
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: inputPassword }),
      });

      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem('nova_admin_auth', inputPassword);
        setIsAuthenticated(true);
        fetchPosts();
      } else {
        setAuthError(data.message || 'Incorrect password.');
      }
    } catch {
      setAuthError('Error communicating with authentication server.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('nova_admin_auth');
    setIsAuthenticated(false);
    setInputPassword('');
  };

  const fetchPosts = async (): Promise<boolean> => {
    setLoadingPosts(true);
    try {
      const res = await fetch('/api/admin/posts');
      const data = await res.json();
      if (data.success) {
        setPosts(data.posts || []);
        return true;
      }
      return false;
    } catch {
      return false;
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    setDeleteId(id);
    const key = sessionStorage.getItem('nova_admin_auth') || '';

    try {
      const res = await fetch(`/api/admin/posts?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-key': key,
        },
      });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert(data.message || 'Failed to delete');
      }
    } catch {
      alert('Error deleting post');
    } finally {
      setDeleteId(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    const key = sessionStorage.getItem('nova_admin_auth') || '';

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': key,
        },
        body: JSON.stringify({
          title,
          slug,
          category,
          excerpt,
          content,
          coverImage,
          authorName,
          authorRole,
          tags,
          featured,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitSuccess(`Published successfully! Slug: /blog/${data.post.slug}`);
        fetchPosts();
        setTitle('');
        setSlug('');
        setExcerpt('');
        setContent('');
        setTags('');
        setFeatured(false);
      } else {
        setSubmitError(data.message || 'Failed to publish post');
      }
    } catch {
      setSubmitError('Network or server error while publishing');
    } finally {
      setSubmitting(false);
    }
  };

  const insertTemplate = (snippet: string) => {
    setContent((prev) => prev + snippet);
  };

  const imagePresets = [
    {
      label: 'Financial Growth',
      url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      label: 'Family Security',
      url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      label: 'Skyscraper & Advisory',
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    },
    {
      label: 'Planning & Documents',
      url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  // Loading state while checking session
  if (isAuthenticated === null) {
    return (
      <div className="login-screen">
        <div className="loading-spinner">Verifying session...</div>
        <style jsx>{`
          .login-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #000050 0%, #003399 100%);
            color: #ffffff;
            font-size: 1.1rem;
          }
        `}</style>
      </div>
    );
  }

  // UI PASSWORD FORM
  if (!isAuthenticated) {
    return (
      <div className="login-screen">
        <div className="login-card">
          <div className="login-logo text-center">
            <Image
              src="/images/Nova-Finance-Logo1.png"
              alt="Nova Finance"
              width={160}
              height={80}
              priority
              style={{ width: 'auto', height: 'auto', maxHeight: '75px' }}
            />
          </div>

          <h2 className="login-title">Admin Publishing Desk</h2>
          <p className="login-subtitle">
            Enter your administrator password to manage and publish articles.
          </p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="field-icon" />
                <input
                  type="password"
                  placeholder="Enter administrator password..."
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="auth-input"
                  autoFocus
                  required
                />
              </div>
            </div>

            {authError && <div className="error-badge">{authError}</div>}

            <button type="submit" disabled={authLoading} className="login-btn">
              {authLoading ? 'Verifying...' : 'Sign In to Admin'} <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <style jsx>{`
          .login-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #000050 0%, #003399 100%);
            padding: 20px;
          }
          .login-card {
            background-color: #ffffff;
            border-radius: 20px;
            padding: 45px 40px;
            width: 100%;
            max-width: 440px;
            box-shadow: 0 20px 45px rgba(0, 0, 80, 0.35);
            text-align: center;
          }
          .login-logo {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
          }
          .login-title {
            font-size: 1.6rem;
            font-weight: 800;
            color: #0a1128;
            margin-bottom: 8px;
          }
          .login-subtitle {
            font-size: 0.92rem;
            color: #64748b;
            margin-bottom: 25px;
            line-height: 1.5;
          }
          .login-form {
            text-align: left;
          }
          .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 700;
            color: #334155;
            margin-bottom: 8px;
          }
          .input-with-icon {
            position: relative;
          }
          .field-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #64748b;
          }
          .auth-input {
            width: 100%;
            padding: 12px 14px 12px 42px;
            border-radius: 10px;
            border: 1px solid #cbd5e1;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .auth-input:focus {
            border-color: #003399;
            box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.12);
          }
          .error-badge {
            margin-top: 10px;
            color: #dc2626;
            font-size: 0.85rem;
            font-weight: 600;
          }
          .login-btn {
            width: 100%;
            margin-top: 20px;
            background-color: #003399;
            color: #ffffff;
            border: none;
            padding: 13px;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .login-btn:hover {
            background-color: #002277;
          }
          .login-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    );
  }

  // AUTHENTICATED DASHBOARD
  return (
    <div className="admin-container">
      {/* Top Navbar */}
      <header className="admin-topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <Link href="/" className="admin-logo-link">
              <Image
                src="/images/Nova-Finance-Logo1.png"
                alt="Nova Finance"
                width={130}
                height={65}
                style={{ width: 'auto', height: 'auto', maxHeight: '45px' }}
              />
            </Link>
            <span className="admin-badge">Publishing Desk</span>
          </div>

          <div className="topbar-right">
            <Link href="/blog" target="_blank" className="btn-view-live">
              View Live Blog <ExternalLink size={14} />
            </Link>
            <button onClick={handleLogout} className="btn-logout" title="Log out">
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="admin-main">
        <div className="admin-content-wrap">
          {/* Dashboard Tab Navigation */}
          <div className="admin-tabs-bar">
            <div className="tabs-left">
              <button
                onClick={() => setActiveTab('write')}
                className={`tab-btn ${activeTab === 'write' ? 'active' : ''}`}
              >
                <PlusCircle size={17} /> Write New Article
              </button>
              <button
                onClick={() => {
                  setActiveTab('list');
                  fetchPosts();
                }}
                className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
              >
                <FileText size={17} /> Manage Published Posts ({posts.length})
              </button>
            </div>

            <div className="tabs-right">
              <button onClick={fetchPosts} className="btn-refresh" title="Reload posts">
                <RefreshCw size={15} /> Refresh
              </button>
            </div>
          </div>

          {/* TAB 1: WRITE ARTICLE */}
          {activeTab === 'write' && (
            <div className="editor-card">
              <div className="editor-header">
                <div>
                  <h2 className="editor-headline">Compose New Wealth Advisory Article</h2>
                  <p className="editor-subhead">
                    Write in HTML or rich text. Articles publish immediately and update the blog.
                  </p>
                </div>

                <div className="editor-mode-toggle">
                  <button
                    type="button"
                    onClick={() => setPreviewMode(!previewMode)}
                    className={`preview-toggle-btn ${previewMode ? 'active' : ''}`}
                  >
                    <Eye size={16} /> {previewMode ? 'Back to Editor' : 'Live Preview'}
                  </button>
                </div>
              </div>

              {submitSuccess && (
                <div className="alert-success">
                  <CheckCircle2 size={18} />
                  <span>{submitSuccess}</span>
                  <Link href="/blog" target="_blank" className="alert-link">
                    Open in Blog ➔
                  </Link>
                </div>
              )}

              {submitError && (
                <div className="alert-error">
                  <AlertCircle size={18} />
                  <span>{submitError}</span>
                </div>
              )}

              {previewMode ? (
                /* LIVE PREVIEW */
                <div className="preview-pane">
                  <div className="preview-banner">
                    <span className="preview-cat">{category}</span>
                    <h1 className="preview-title">{title || 'Your Article Title'}</h1>
                    <div className="preview-meta">
                      <span>By {authorName}</span> • <span>{authorRole}</span>
                    </div>
                  </div>

                  <div className="preview-body">
                    {coverImage && (
                      <div className="preview-cover-wrap">
                        <img src={coverImage} alt="Cover Preview" className="preview-cover" />
                      </div>
                    )}
                    <div
                      className="preview-html"
                      dangerouslySetInnerHTML={{
                        __html:
                          content ||
                          '<p>Start writing your content below to preview the formatted article...</p>',
                      }}
                    />
                  </div>
                </div>
              ) : (
                /* EDITING FORM */
                <form onSubmit={handleSubmit} className="article-form">
                  {/* Title & Category Row */}
                  <div className="form-row two-col">
                    <div className="form-field">
                      <label>Article Title *</label>
                      <input
                        type="text"
                        placeholder="e.g. Navigating Multi-Generational Wealth Transfer"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="form-input text-bold"
                      />
                    </div>

                    <div className="form-field">
                      <label>Category *</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-input"
                      >
                        <option value="Investment Strategy">Investment Strategy</option>
                        <option value="Asset Protection">Asset Protection</option>
                        <option value="Global Wealth">Global Wealth</option>
                        <option value="Financial Planning">Financial Planning</option>
                        <option value="Tax Optimization">Tax Optimization</option>
                        <option value="Retirement Advisory">Retirement Advisory</option>
                      </select>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div className="form-field">
                    <label>Short Summary / Excerpt (Displayed in cards &amp; search) *</label>
                    <textarea
                      rows={2}
                      placeholder="A compelling 2-sentence summary of the key takeaways..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      required
                      className="form-textarea"
                    />
                  </div>

                  {/* Cover Image & Presets */}
                  <div className="form-field">
                    <label>Cover Image URL *</label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      required
                      className="form-input"
                    />
                    <div className="preset-row">
                      <span className="preset-label">Quick Unsplash Presets:</span>
                      {imagePresets.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCoverImage(img.url)}
                          className="preset-pill"
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Content Formatting Toolbar */}
                  <div className="form-field">
                    <div className="content-label-row">
                      <label>Article Content (HTML / Rich text) *</label>
                      <div className="editor-snippets">
                        <span className="snippets-label">Insert:</span>
                        <button
                          type="button"
                          onClick={() => insertTemplate('<h2>Section Heading</h2>\n')}
                          className="snippet-btn"
                        >
                          H2 Heading
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertTemplate(
                              '<p class="lead">Your highlighted opening statement here.</p>\n'
                            )
                          }
                          className="snippet-btn"
                        >
                          Lead Intro
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertTemplate(
                              '<blockquote>"A memorable quotation or strategic takeaway."</blockquote>\n'
                            )
                          }
                          className="snippet-btn"
                        >
                          Quote Box
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertTemplate(
                              '<ul>\n  <li><strong>Point 1:</strong> Description</li>\n  <li><strong>Point 2:</strong> Description</li>\n</ul>\n'
                            )
                          }
                          className="snippet-btn"
                        >
                          Bullet List
                        </button>
                      </div>
                    </div>

                    <textarea
                      rows={14}
                      placeholder="Write your article in paragraphs with <h2>, <p>, <blockquote>, and <ul> tags..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      className="form-textarea code-font"
                    />
                  </div>

                  {/* Author Details Row */}
                  <div className="form-row three-col">
                    <div className="form-field">
                      <label>Author Name</label>
                      <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label>Author Role</label>
                      <input
                        type="text"
                        value={authorRole}
                        onChange={(e) => setAuthorRole(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label>Comma-separated Tags</label>
                      <input
                        type="text"
                        placeholder="Tax, Advisory, Planning"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Featured Checkbox */}
                  <div className="checkbox-field">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={featured}
                        onChange={(e) => setFeatured(e.target.checked)}
                      />
                      <span>Pin as Featured Article (Hero spot on /blog)</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="form-actions">
                    <button type="submit" disabled={submitting} className="btn-publish-main">
                      {submitting ? 'Publishing...' : 'Publish Article Live'} <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: MANAGE POSTS */}
          {activeTab === 'list' && (
            <div className="list-card">
              <div className="list-card-header">
                <h3 className="list-title">All Published Articles ({posts.length})</h3>
                <p className="list-subtitle">
                  Articles currently active on the blog. Delete or view live URLs.
                </p>
              </div>

              {loadingPosts ? (
                <div className="loading-state">Loading articles...</div>
              ) : posts.length === 0 ? (
                <div className="empty-state">No articles found. Click &quot;Write New Article&quot; above!</div>
              ) : (
                <div className="posts-table-wrap">
                  <table className="posts-table">
                    <thead>
                      <tr>
                        <th>Cover</th>
                        <th>Title &amp; Category</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.id}>
                          <td className="col-thumb">
                            <img src={post.coverImage} alt={post.title} className="table-thumb" />
                          </td>
                          <td className="col-info">
                            <span className="table-cat">{post.category}</span>
                            <div className="table-title">
                              <Link href={`/blog/${post.slug}`} target="_blank">
                                {post.title}
                              </Link>
                            </div>
                            <span className="table-slug">/blog/{post.slug}</span>
                          </td>
                          <td className="col-author">
                            <span className="table-author-name">{post.author.name}</span>
                            <span className="table-author-role">{post.author.role}</span>
                          </td>
                          <td className="col-date">{post.date}</td>
                          <td className="col-actions">
                            <div className="action-btns">
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="action-btn-view"
                                title="View live"
                              >
                                <ExternalLink size={15} />
                              </Link>
                              <button
                                onClick={() => handleDelete(post.id)}
                                disabled={deleteId === post.id}
                                className="action-btn-delete"
                                title="Delete article"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .admin-container {
          min-height: 100vh;
          background-color: #f8fafc;
          color: #0f172a;
          font-family: inherit;
        }

        /* Topbar */
        .admin-topbar {
          background-color: #000050;
          color: #ffffff;
          padding: 12px 24px;
          border-bottom: 2px solid #00c2cb;
        }
        .topbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .admin-badge {
          background-color: rgba(0, 194, 203, 0.15);
          color: #00c2cb;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-view-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #003399;
          color: #ffffff;
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .btn-view-live:hover {
          background-color: #002277;
        }
        .btn-logout {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid #475569;
          color: #cbd5e1;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-logout:hover {
          background: #475569;
          color: #ffffff;
        }

        /* Main Content */
        .admin-main {
          padding: 40px 20px 80px;
        }
        .admin-content-wrap {
          max-width: 1040px;
          margin: 0 auto;
        }

        /* Tabs Bar */
        .admin-tabs-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }
        .tabs-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          background-color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tab-btn:hover {
          border-color: #003399;
          color: #003399;
        }
        .tab-btn.active {
          background-color: #003399;
          border-color: #003399;
          color: #ffffff;
        }
        .btn-refresh {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.85rem;
          color: #64748b;
          cursor: pointer;
        }
        .btn-refresh:hover {
          color: #0f172a;
          border-color: #94a3b8;
        }

        /* Editor Card */
        .editor-card, .list-card {
          background-color: #ffffff;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          padding: 35px 40px;
          box-shadow: 0 4px 20px rgba(0, 51, 153, 0.04);
        }
        .editor-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 25px;
        }
        .editor-headline {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 4px;
        }
        .editor-subhead {
          font-size: 0.92rem;
          color: #64748b;
        }
        .preview-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid #003399;
          background-color: #ffffff;
          color: #003399;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .preview-toggle-btn.active, .preview-toggle-btn:hover {
          background-color: #003399;
          color: #ffffff;
        }

        /* Alerts */
        .alert-success {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          margin-bottom: 25px;
        }
        .alert-link {
          margin-left: auto;
          color: #047857;
          text-decoration: underline;
        }
        .alert-error {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          margin-bottom: 25px;
        }

        /* Form */
        .article-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .form-row {
          display: grid;
          gap: 20px;
        }
        .two-col {
          grid-template-columns: 2fr 1fr;
        }
        .three-col {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-field label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1e293b;
        }
        .form-input, .form-textarea {
          padding: 11px 14px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 0.95rem;
          color: #0f172a;
          background-color: #ffffff;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #003399;
          box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.1);
        }
        .text-bold {
          font-weight: 700;
        }
        .code-font {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .preset-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }
        .preset-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
        }
        .preset-pill {
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #334155;
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
        }
        .preset-pill:hover {
          background-color: #003399;
          color: #ffffff;
          border-color: #003399;
        }

        .content-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 4px;
        }
        .editor-snippets {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .snippets-label {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
        }
        .snippet-btn {
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #003399;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 6px;
          cursor: pointer;
        }
        .snippet-btn:hover {
          background-color: #003399;
          color: #ffffff;
        }

        .checkbox-field {
          margin: 6px 0 10px;
        }
        .checkbox-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
        }

        .form-actions {
          padding-top: 15px;
          border-top: 1px solid #f1f5f9;
        }
        .btn-publish-main {
          background-color: #003399;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .btn-publish-main:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }
        .btn-publish-main:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Live Preview Pane */
        .preview-pane {
          border: 1px dashed #cbd5e1;
          border-radius: 16px;
          padding: 30px;
          background-color: #fbfcfe;
        }
        .preview-banner {
          text-align: center;
          margin-bottom: 25px;
        }
        .preview-cat {
          background-color: rgba(0, 51, 153, 0.1);
          color: #003399;
          font-weight: 700;
          font-size: 0.8rem;
          padding: 4px 12px;
          border-radius: 9999px;
          text-transform: uppercase;
        }
        .preview-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 12px 0;
          color: #0a1128;
        }
        .preview-meta {
          font-size: 0.9rem;
          color: #64748b;
        }
        .preview-cover-wrap {
          max-height: 380px;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 25px;
        }
        .preview-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .preview-html {
          font-size: 1.08rem;
          line-height: 1.8;
          color: #334155;
        }

        /* Table */
        .posts-table-wrap {
          overflow-x: auto;
          margin-top: 20px;
        }
        .posts-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .posts-table th {
          background-color: #f8fafc;
          padding: 12px 14px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
          border-bottom: 2px solid #e2e8f0;
          text-transform: uppercase;
        }
        .posts-table td {
          padding: 16px 14px;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        .table-thumb {
          width: 60px;
          height: 44px;
          border-radius: 8px;
          object-fit: cover;
        }
        .table-cat {
          font-size: 0.72rem;
          font-weight: 700;
          color: #003399;
          text-transform: uppercase;
        }
        .table-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          margin: 2px 0;
        }
        .table-title a {
          color: inherit;
          text-decoration: none;
        }
        .table-title a:hover {
          color: #003399;
        }
        .table-slug {
          font-size: 0.78rem;
          color: #94a3b8;
        }
        .table-author-name {
          display: block;
          font-weight: 600;
          font-size: 0.88rem;
        }
        .table-author-role {
          font-size: 0.75rem;
          color: #64748b;
        }
        .col-date {
          font-size: 0.85rem;
          color: #64748b;
          white-space: nowrap;
        }
        .action-btns {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .action-btn-view {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background-color: #f1f5f9;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .action-btn-view:hover {
          background-color: #003399;
          color: #ffffff;
        }
        .action-btn-delete {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #fee2e2;
          background-color: #fef2f2;
          color: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .action-btn-delete:hover {
          background-color: #dc2626;
          color: #ffffff;
        }

        .loading-state, .empty-state {
          padding: 50px 20px;
          text-align: center;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .two-col, .three-col {
            grid-template-columns: 1fr;
          }
          .editor-card, .list-card {
            padding: 24px 18px;
          }
        }
      `}</style>
    </div>
  );
}

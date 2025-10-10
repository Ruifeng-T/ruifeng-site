"use client";
import { useMemo, useState } from "react";

/**
 * USC Challenger – Web Demo with Scaled Frame
 * - Drop-in page at /demo
 * - 外层容器加缩放（scale），让页面更小更好展示
 */
export default function DemoPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      <div
        style={{
          transform: "scale(1)",
          transformOrigin: "top center",
          width: "100%",        // ✅ 自适应
          maxWidth: "420px",    // ✅ 不超过 420
          height: "740px",
          overflow: "hidden",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <DemoApp />
      </div>
    </div>
  );
}

/* ---------- 主 Demo ---------- */
function DemoApp() {
  const [tab, setTab] = useState("home");

  return (
    <div className="usc-wrap">
      <PhoneFrame>
        <Header title={tabTitle(tab)} />
        <main className="content">
          {tab === "home" && <HomeTab />}
          {tab === "progress" && <ProgressTab />}
          {tab === "explore" && <ExploreTab />}
          {tab === "create" && <CreateTab onCreated={() => setTab("home")} />}
          {tab === "profile" && <ProfileTab />}
        </main>
        <BottomNav tab={tab} onChange={setTab} />
      </PhoneFrame>

      {/* ---- Minimal CSS ---- */}
      <style jsx global>{`
        :root {
          --usc-red: #990000;
          --usc-gold: #ffcc00;
          --ink: #111;
          --muted: #666;
          --bg: #fff;
          --card: #ffffff;
          --soft: #f4f4f5;
          --ring: #e5e7eb;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: #fafafa;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Inter, Arial;
        }
        .usc-wrap {
        width: 100%; 
        max-width: 420px;
          height: 100%; 
          background: var(--bg);
          border-radius: 24px;
          overflow: hidden;
        }
        .phone {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .status {
          height: 10px;
          background: linear-gradient(90deg, var(--usc-red), var(--usc-gold));
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--usc-red);
          color: #fff;
          padding: 14px 16px;
          font-weight: 700;
        }
        .content {
          flex: 1;
          overflow-y: hidden;
          padding: 16px 16px 72px;
        }
        .card {
          background: var(--card);
          border: 1px solid var(--ring);
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 12px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);
        }
        .row {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .muted {
          color: var(--muted);
          font-size: 13px;
        }
        .btn {
          border: 0;
          border-radius: 10px;
          padding: 8px 12px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-primary {
          background: var(--usc-red);
          color: #fff;
        }
        .btn-gold {
          background: var(--usc-gold);
          color: #111;
        }
        .btn-ghost {
          background: transparent;
          color: var(--usc-red);
        }
        .chip {
          display: inline-block;
          background: var(--soft);
          border: 1px solid var(--ring);
          padding: 4px 8px;
          border-radius: 999px;
          font-size: 12px;
        }
        .nav {
          position: sticky;
          bottom: 0;
          left: 0;
          right: 0;
          background: #fff;
          border-top: 1px solid var(--ring);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          padding: 6px;
        }
        .nav a {
          display: grid;
          place-items: center;
          padding: 8px 0;
          border-radius: 10px;
          font-size: 12px;
          color: #444;
          text-decoration: none;
        }
        .nav a.active {
          color: var(--usc-red);
          background: rgba(153, 0, 0, 0.08);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

/* ---------- Frame ---------- */
function PhoneFrame({ children }) {
  return (
    <div className="phone">
      <div className="status" />
      {children}
    </div>
  );
}
function Header({ title }) {
  return <div className="header">{title}</div>;
}
function BottomNav({ tab, onChange }) {
  const tabs = [
    ["home", "Home"],
    ["progress", "Progress"],
    ["explore", "Explore"],
    ["create", "Create"],
    ["profile", "Profile"],
  ];
  return (
    <nav className="nav">
      {tabs.map(([key, label]) => (
        <a
          key={key}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onChange(key);
          }}
          className={tab === key ? "active" : ""}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
function tabTitle(t) {
  switch (t) {
    case "home":
      return "USChallengers";
    case "progress":
      return "Progress";
    case "explore":
      return "Explore";
    case "create":
      return "Create Challenge";
    case "profile":
      return "My Profile";
    default:
      return "USChallengers";
  }
}

/* ---------- Tabs ---------- */
function HomeTab() {
  const initial = useMemo(
    () => [
      { id: 1, title: "Read 10 pages daily", type: "Book", stake: 10, joined: false },
      { id: 2, title: "Research top 10 companies", type: "Career", stake: 20, joined: false },
      { id: 3, title: "Practice behavioral interview", type: "Career", stake: 5, joined: true },
      { id: 4, title: "Gym 3x this week", type: "Fitness", stake: 10, joined: false },
    ],
    []
  );
  const [items, setItems] = useState(initial);
  const toggleJoin = (id) =>
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, joined: !x.joined } : x)));

  return (
    <div>
      {items.map((c) => (
        <div className="card" key={c.id}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div>
              <div style={{ fontWeight: 700 }}>{c.title}</div>
              <div className="muted">
                {c.type} • Stake: ${c.stake}
              </div>
            </div>
            <span className="chip">{c.joined ? "Joined" : "Open"}</span>
          </div>
          <div className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
            <button
              className={c.joined ? "btn btn-gold" : "btn btn-primary"}
              onClick={() => toggleJoin(c.id)}
            >
              {c.joined ? "Leave" : "Join"}
            </button>
            <a href="#" className="btn btn-ghost">
              Details →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgressTab() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [pct] = useState([40, 70, 55, 85, 30, 50, 65]);
  return (
    <div className="card">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Weekly Completion</div>
      <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 120 }}>
        {pct.map((p, i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: `${p}%`,
              background: "var(--usc-gold)",
              borderRadius: "6px 6px 0 0",
            }}
            title={`${days[i]} ${p}%`}
          />
        ))}
      </div>
    </div>
  );
}

function ExploreTab() {
  const [posts, setPosts] = useState([
    { id: 1, title: "SQL Sprint – 7 Day Plan", liked: false },
    { id: 2, title: "Top 10 MSBA Recruiting Tips", liked: true },
    { id: 3, title: "Habit science: why streaks work", liked: false },
  ]);
  const toggle = (id) =>
    setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)));

  return (
    <div>
      {posts.map((p) => (
        <div className="card" key={p.id}>
          <div style={{ fontWeight: 700 }}>{p.title}</div>
          <div className="muted">Community • Insights</div>
          <div className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
            <button className="btn btn-primary" onClick={() => toggle(p.id)}>
              {p.liked ? "Liked ✓" : "Like"}
            </button>
            <a href="#" className="btn btn-ghost">
              Open →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

function CreateTab({ onCreated }) {
  const [title, setTitle] = useState("");
  const [stake, setStake] = useState(10);
  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a title");
    alert(`Challenge "${title}" created with stake $${stake}`);
    onCreated();
  };

  return (
    <form className="card grid" onSubmit={submit}>
      <div className="field">
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="：Apply 5 Internships"
        />
      </div>
      <div className="field">
        <label>Stake ($)</label>
        <input
          type="number"
          className="input"
          value={stake}
          onChange={(e) => setStake(Number(e.target.value))}
        />
      </div>
      <button className="btn btn-gold" type="submit">
        Create
      </button>
    </form>
  );
}

function ProfileTab() {
  return (
    <div className="card">
      <div style={{ fontWeight: 800, fontSize: 18 }}>Grace Yang</div>
      <div className="muted">USC MSBA • Class of 2026</div>
    </div>
  );
}

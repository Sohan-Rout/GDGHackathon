"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { FaRobot, FaAppStoreIos, FaAws, FaDatabase, FaGamepad, FaLightbulb } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GoIssueTracks } from "react-icons/go";
import { SiBlockchaindotcom, SiCyberdefenders } from "react-icons/si";

const tracksData = [
  { title: "AI & ML", desc: "Innovate with artificial intelligence and machine learning.", icon: <FaRobot className="w-8 h-8 text-sky-500" /> },
  { title: "Blockchain", desc: "Explore decentralized technologies and applications.", icon : <SiBlockchaindotcom className="w-8 h-8 text-sky-500" /> },
  { title: "Cybersecurity", desc: "Secure systems and protect data from threats.", icon : <SiCyberdefenders className="w-8 h-8 text-sky-500" /> },
  { title: "Web Development", desc: "Build modern, scalable web applications.", icon: <CgWebsite className="w-8 h-8 text-sky-500" /> },
  { title: "Mobile Development", desc: "Create cutting-edge mobile apps.", icon: <FaAppStoreIos className="w-8 h-8 text-sky-500" /> },
  { title: "IoT", desc: "Connect devices and build smart solutions.", icon : <FaLightbulb className="w-8 h-8 text-sky-500" /> },
  { title: "Game Development", desc: "Design immersive gaming experiences.", icon : <FaGamepad className="w-8 h-8 text-sky-500" /> },
  { title: "Cloud Computing", desc: "Leverage cloud platforms for scalable solutions.", icon : <FaAws className="w-8 h-8 text-sky-500"/> },
  { title: "Data Science", desc: "Analyze and visualize data to uncover insights.", icon : <FaDatabase className="w-8 h-8 text-sky-500" /> },
];

const key = "tracksState";

const randomPos = () => ({
  x: 100 + Math.random() * 800,
  y: 100 + Math.random() * 400,
});

export default function TracksBoard() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [connecting, setConnecting] = useState(null);

  const svgRef = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    setNodes(
      tracksData.map((t, i) => ({
        id: i,
        ...t,
        ...(saved.nodes?.[i] || randomPos()),
      }))
    );
    setEdges(saved.edges || []);
  }, []);

  useEffect(() => {
    if (!nodes.length) return;
    localStorage.setItem(
      key,
      JSON.stringify({
        nodes: nodes.map((n) => ({ x: n.x, y: n.y })),
        edges,
      })
    );
  }, [nodes, edges]);

  /* ------------- node move ------------- */
  const moveNode = (id, { x, y }) =>
    setNodes((ns) =>
      ns.map((n) => (n.id === id ? { ...n, x: n.x + x, y: n.y + y } : n))
    );

  /* ------------- edge logic ------------- */
  const handlePortClick = (nodeId, port) => {
    if (port === "out") {
      setConnecting({ fromId: nodeId });
    } else if (port === "in" && connecting) {
      const exists = edges.find(
        (e) =>
          (e.from === connecting.fromId && e.to === nodeId) ||
          (e.from === nodeId && e.to === connecting.fromId)
      );
      if (!exists && connecting.fromId !== nodeId) {
        setEdges((e) => [...e, { from: connecting.fromId, to: nodeId }]);
      }
      setConnecting(null);
    } else {
      // remove existing edge
      setEdges((e) =>
        e.filter(
          (edge) =>
            !(edge.from === connecting?.fromId && edge.to === nodeId) &&
            !(edge.from === nodeId && edge.to === connecting?.fromId)
        )
      );
      setConnecting(null);
    }
  };

  /* ------------- render ------------- */
  return (
    <main
      className="w-full h-screen relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* header */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div className="flex uppercase items-center gap-2 text-xl bg-white border border-black px-4 py-2 rounded-full shadow">
          <GoIssueTracks />
          <span>Tracks</span>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          Drag cards around • Click ports to connect
        </p>
      </div>

      {/* edges */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        {edges.map((e, i) => {
          const from = nodes.find((n) => n.id === e.from);
          const to = nodes.find((n) => n.id === e.to);
          if (!from || !to) return null;
          const sx = from.x + 256; // right edge
          const sy = from.y + 52;
          const tx = to.x;
          const ty = to.y + 52;
          const c1x = sx + Math.abs(tx - sx) * 0.5;
          const c2x = tx - Math.abs(tx - sx) * 0.5;
          return (
            <path
              key={i}
              d={`M ${sx} ${sy} C ${c1x} ${sy} ${c2x} ${ty} ${tx} ${ty}`}
              stroke="#22c55e"
              strokeWidth={2}
              fill="none"
            />
          );
        })}
      </svg>

      {/* nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          drag
          dragMomentum={false}
          onDragEnd={(_, info) => moveNode(node.id, info.offset)}
          style={{ x: node.x, y: node.y }}
          className="absolute w-64 rounded-lg border bg-white shadow-md p-4 z-10 cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.02 }}
          whileDrag={{ scale: 1.05 }}
        >
          <div className="flex flex-col items-center gap-2 mb-2">
            {node.icon || <div className="w-8 h-8 rounded bg-slate-200" />}
            <span className="font-semibold text-lg text-slate-800">{node.title}</span>
          </div>
          <p className="text-xs text-slate-600 text-center">{node.desc}</p>

          {/* ports */}
          <button
            onClick={() => handlePortClick(node.id, "out")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full border-2 ${
              connecting?.fromId === node.id ? "bg-green-400" : "bg-white border-slate-400 hover:bg-green-200"
            }`}
          />
          <button
            onClick={() => handlePortClick(node.id, "in")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white border-slate-400 hover:bg-green-200"
          />

          {/* selection toggle */}
          <button
            onClick={() =>
              setSelected((s) => {
                const next = new Set(s);
                next.has(node.id) ? next.delete(node.id) : next.add(node.id);
                return next;
              })
            }
            className="absolute top-3 right-3"
          >
            {selected.has(node.id) ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-slate-400" />
            )}
          </button>
        </motion.div>
      ))}
    </main>
  );
}
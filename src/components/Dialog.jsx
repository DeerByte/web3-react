const Dialog = ({ ref }) => {
  return (
    <dialog
      ref={ref}
      className="bg-gray-900 text-white rounded-xl p-6 shadow-2xl max-w-md w-full border border-gray-700 backdrop:bg-black/60"
    >
      <h3 className="text-xl font-bold text-white mb-1">Web 3 — React SPA</h3>
      <h4 className="text-indigo-400 font-semibold mb-0.5">
        Willow Sobolewski
      </h4>
      <h5 className="text-gray-400 text-sm mb-4">
        Mount Royal University — COMP 4513
      </h5>
      <p className="text-gray-300 text-sm mb-4">
        Demonstrates integrating React into a front-end web development project.
        Built with React, Tailwind CSS, and Base UI on the front-end, backed by
        a Node API with a Supabase PostgreSQL database.
      </p>
      <p className="text-gray-300 text-sm mb-4">
        <span className="text-gray-400">GitHub: </span>
        <a
          className="text-indigo-400 hover:text-indigo-300 underline"
          href="https://github.com/DeerByte"
        >
          DeerByte
        </a>
        <br />
        <span className="text-gray-400">Node API: </span>
        <a
          className="text-indigo-400 hover:text-indigo-300 underline"
          href="https://github.com/DeerByte/web3-supanode"
        >
          web3-supanode
        </a>
        <br />
        <span className="text-gray-400">This project: </span>
        <a
          className="text-indigo-400 hover:text-indigo-300 underline"
          href="https://github.com/DeerByte/web3-react"
        >
          web3-react
        </a>
      </p>
      <p className="text-gray-500 text-xs mb-4 border-t border-gray-700 pt-3">
        Component styling generated with assistance from Claude (Anthropic). All
        logic, structure, and architecture written by Willow Sobolewski.
      </p>
      <button
        onClick={() => ref.current.close()}
        className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-md transition-colors"
      >
        Close
      </button>
    </dialog>
  );
};

export default Dialog;

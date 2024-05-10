declare const useEditor: () => (import("slate").BaseEditor & import("slate-react").ReactEditor & import("slate-history").HistoryEditor)[];
export default useEditor;

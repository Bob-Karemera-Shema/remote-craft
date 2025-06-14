const Spinner = () => (
  <div role="status" aria-live="polite" className="min-h-screen w-full flex justify-center items-center">
    <div className="inline-block h-16 w-16 border-4 border-hover-gray rounded-[50%] border-t-custom-blue animate-spin" />
  </div>
);

export default Spinner;
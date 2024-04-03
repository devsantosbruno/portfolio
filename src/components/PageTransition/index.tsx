export function PageTransition() {
  return (
    <div
      id='pageTransitionElement'
      className='h-screen w-screen flex items-center justify-center bg-[#242424] fixed left-0 right-0 z-50 top-[200vh]'
    >
      <div className='absolute bottom-full right-0 -left-[10vw] bg-[#242424] rounded-t-full w-[120vw] h-[50vh]' />
      <div className='absolute top-full right-0 -left-[10vw] bg-[#242424] rounded-b-full w-[120vw] h-[50vh]' />
      <span className='text-white text-8xl font-black uppercase' id='teste' />
      <span
        className='text-[6rem] font-black tracking-tighter leading-[0.8] text-white mb-16 md:mb-24'
        id='pageTransitionTitle'
      />
    </div>
  );
}

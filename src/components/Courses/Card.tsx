import Image from 'next/image';

export type CardProps = {
  company: string;
  image: string;
  link: string;
  logo: string;
  techs: string[];
  year: string;
};

export function Card({ company, image, link, logo, techs, year }: CardProps) {
  return (
    <div className='text-white min-w-[35%] overflow-hidden z-10'>
      <div className='bg-lime-500 rounded-3xl h-[600px] flex relative overflow-hidden'>
        <div className='absolute top-5 right-5 bg-lime-700/50 rounded-full h-28 w-28 flex items-center justify-center'>
          <Image src={`/${logo}`} width={80} height={80} alt='' />
        </div>

        <h2>IMAGEM</h2>
      </div>

      <div className='flex flex-col mt-12'>
        <span className='text-[#4B4E4B]'>
          {techs.map((item) => `${item}; `)}
        </span>

        <h3 className='text-4xl text-[#FEFEFE] font-semibold mt-2 mb-8'>
          {company}
        </h3>

        <div className='flex gap-14 text-[#4B4E4B]'>
          <span>Link</span>
          <span>*</span>
          <span>Link</span>
        </div>
      </div>
    </div>
  );
}

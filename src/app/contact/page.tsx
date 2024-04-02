'use client';

import { Input } from '@/components/Input';
import { Title } from '@/components/Title';
import { useScroll } from '@/hooks/useScroll';
import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const container = useRef(null);
  const scrollYProgress = useScroll(container, ['start end', 'end start']);
  const height = useTransform(scrollYProgress, [0, 1.01], [50, 0]);

  return (
    <section
      ref={container}
      className='z-10 relative bg-black py-20'
      id='contact'
    >
      <div className='containerTeste min-h-[125vh]'>
        <Title className='uppercase mr-auto pt-[15vh]'>
          Preencha os campos e <br /> entraremos em contato
        </Title>

        <div className='flex flex-col gap-10'>
          <h2 className='text-4xl text-white'>
            Meu nome é{' '}
            <span className='whitespace-nowrap'>
              [
              <Input />
              ],
            </span>{' '}
            Eu sou{' '}
            <span className='whitespace-nowrap'>
              [
              <Input />
              ],
            </span>{' '}
            Falo em nome da empresa{' '}
            <span className='whitespace-nowrap'>
              [
              <Input />
              ],
            </span>{' '}
            Gostaria de marcar uma reunião para entender melhor o trabalho de
            vocês e se minha marca é compatível com o serviço de vocês.
          </h2>

          <h2 className='text-4xl text-white'>
            Quer um orçamento? Vamos marcar uma reunião para que possamos
            entender melhor sua empresa e como podemos fazer dela melhor,
            juntos. Qual seu email?{' '}
            <span className='whitespace-nowrap'>
              [
              <Input />
              ],
            </span>{' '}
            Entraremos em contato para um agendamento, muito obrigado.
          </h2>

          <div className='mt-5 flex justify-end'>
            <button className='inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#a3e635,55%,#000103)] bg-[length:200%_100%] disabled:bg-none disabled:opacity-50 px-10 py-3 font-medium text-slate-400 transition-colors'>
              submit
            </button>
          </div>
        </div>
      </div>

      <motion.div style={{ height }} className='relative mt-28'>
        <div className='h-[1550%] w-[120%] -left-[10%] rounded-b-[50%] bg-black z-10 absolute shadow-contact' />
      </motion.div>
    </section>
  );
}

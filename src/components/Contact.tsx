import Input from './Input';

export function Contact() {
  return (
    <div className='min-w-[400px] w-[60vw] mx-auto'>
      <h2 className='text-8xl text-lime-400 mb-10 font-black tracking-tighter'>
        Contato
      </h2>

      <div className='flex flex-col gap-10'>
        <h2 className='text-3xl text-white'>
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

        <h2 className='text-3xl text-white'>
          Quer um orçamento? Vamos marcar uma reunião para que possamos entender
          melhor sua empresa e como podemos fazer dela melhor, juntos. Qual seu
          email?{' '}
          <span className='whitespace-nowrap'>
            [
            <Input />
            ],
          </span>{' '}
          Entraremos em contato para um agendamento, muito obrigado.
        </h2>
      </div>
    </div>
  );
}

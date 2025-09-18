export default function CompAIDashboard() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800'>
      <div className='container mx-auto px-4 py-8'>
        <header className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-white mb-4 drop-shadow-lg'>
            CompAI - Análise Estratégica para Pedreira
          </h1>
          <p className='text-xl text-blue-100 opacity-90'>
            Dashboard inteligente com IA para análise de custos, margens, produção e insights estratégicos
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-2xl p-6 shadow-2xl'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>
              📊 Análise de Dados
            </h3>
            <div className='text-center mb-4'>
              <span className='text-4xl font-bold text-blue-600 block'>1,234</span>
              <span className='text-sm text-gray-500'>Pontos de Dados Analisados</span>
            </div>
            <button className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold'>
              Atualizar Dados
            </button>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-2xl'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>
              🤖 Insights com IA
            </h3>
            <div className='space-y-3 mb-4'>
              <div className='flex items-center p-2 bg-gray-50 rounded-lg'>
                <span className='text-green-500 mr-2'>💡</span>
                <span className='text-sm text-gray-700'>Performance crescendo 15% no trimestre</span>
              </div>
              <div className='flex items-center p-2 bg-gray-50 rounded-lg'>
                <span className='text-green-500 mr-2'>💡</span>
                <span className='text-sm text-gray-700'>Eficiência ótima detectada no Setor A</span>
              </div>
            </div>
            <button className='w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold'>
              Gerar Novos Insights
            </button>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-2xl'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>💰 Custos Operacionais</h3>
            <div className='h-48 flex items-center justify-center bg-gray-100 rounded-lg'>
              <p className='text-gray-500'>Gráfico de Custos</p>
            </div>
          </div>

          <div className='bg-white rounded-2xl p-6 shadow-2xl'>
            <h3 className='text-lg font-semibold text-gray-700 mb-4'>🏭 Produção Mensal</h3>
            <div className='h-48 flex items-center justify-center bg-gray-100 rounded-lg'>
              <p className='text-gray-500'>Gráfico de Produção</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl p-6 shadow-2xl mb-8'>
          <h3 className='text-xl font-semibold text-gray-700 mb-6'>⚙️ Status do Sistema</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex items-center p-4 bg-green-50 rounded-lg'>
              <div className='w-3 h-3 bg-green-500 rounded-full mr-3'></div>
              <span className='text-green-700 font-medium'>Motor IA: Online</span>
            </div>
            <div className='flex items-center p-4 bg-blue-50 rounded-lg'>
              <div className='w-3 h-3 bg-blue-500 rounded-full mr-3'></div>
              <span className='text-blue-700 font-medium'>Pipeline de Dados: Ativo</span>
            </div>
            <div className='flex items-center p-4 bg-purple-50 rounded-lg'>
              <div className='w-3 h-3 bg-purple-500 rounded-full mr-3'></div>
              <span className='text-purple-700 font-medium'>Analytics: Executando</span>
            </div>
          </div>
        </div>

        <footer className='text-center mt-12'>
          <p className='text-white opacity-80'>
            CompAI Dashboard - Desenvolvido com IA
          </p>
        </footer>
      </div>
    </div>
  )
}
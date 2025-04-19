import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Página não encontrada</h2>
      <p className="mt-2 text-gray-600">A página que você está procurando não existe.</p>
      <Link 
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
} 
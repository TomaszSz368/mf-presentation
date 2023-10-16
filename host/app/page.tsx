import dynamic from 'next/dynamic'

const MicrofrontLazy = dynamic(() => import('@/app/components/Microfront'), {
  ssr: false,
})

export default function Home() {
  return <div data-testid="home-page">
      <MicrofrontLazy />
    </div>;
}

export default function Page({
  params
}: {
  params: { slug: string}
}) {
  return <h1>Dashboard: {params.slug?.replace('-', ' ')}</h1>
} 
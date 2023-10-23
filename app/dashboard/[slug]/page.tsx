export default function Page({
  params
}: {
  params: { slug: string}
}) {
  return <h1>Dashboard: {params.slug}</h1>
}
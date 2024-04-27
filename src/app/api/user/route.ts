export const POST = async (req: NextRequest) => {
  const body = await req.json()
  console.log(body)
  return NextResponse.json({
    message: 'Data diterima',
    data: body
  })
}

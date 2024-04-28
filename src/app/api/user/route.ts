export async function GET() {
    const testdata = {
        name:"test",
        pass:"1234"
    }
    console.log(testdata)
    return Response.json({ data:"THIS Is USER" })
  }
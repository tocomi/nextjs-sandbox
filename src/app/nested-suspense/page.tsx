import { Suspense } from 'react'

const getPromiseData = (ms: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100))
    }, ms)
  })
}

export default async function NestedSuspensePage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Nested Suspense Page</h1>
      <div className="mt-4 flex flex-col gap-2">
        <Suspense fallback={<Box>1000ms Suspense...</Box>}>
          <PromiseData ms={1000} />
        </Suspense>
        <Suspense fallback={<Box>3000ms Suspense...</Box>}>
          <PromiseData ms={3000} />
        </Suspense>
        <Suspense fallback={<Box>5000ms Suspense...</Box>}>
          <PromiseData ms={5000} />
        </Suspense>
        <Suspense fallback={<Box>3000ms Suspense...</Box>}>
          <NestedPromiseData ms={3000} />
        </Suspense>
      </div>
    </>
  )
}

const NestedPromiseData = async ({ ms }: { ms: number }) => {
  const data = await getPromiseData(ms)

  return (
    <Box>
      data: {data}
      <div className="mt-2 flex flex-col gap-2">
        <Suspense fallback={<Box>{`${ms}ms Suspense...`}</Box>}>
          <PromiseData ms={ms} />
          <Suspense fallback={<Box>{`${ms}ms Suspense...`}</Box>}>
            <PromiseData ms={ms} />
            <Suspense fallback={<Box>{`${ms}ms Suspense...`}</Box>}>
              <PromiseData ms={ms} />
            </Suspense>
          </Suspense>
        </Suspense>
      </div>
    </Box>
  )
}

const PromiseData = async ({ ms }: { ms: number }) => {
  const data = await getPromiseData(ms)

  return <Box>data: {data}</Box>
}

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg border-2 border-gray-600 p-4">{children}</div>
  )
}

class A {
  other: B | null
  constructor() {
    this.other = null
  }
}

class B {
  a: A
  constructor(a: A) {
    this.a = a
    a.other = this
  }
}

const objA = new A()
const objB = new B(objA)

export default function Page() {
  console.log({ objA, objB })
  return (
    <>
      {objA}
      {objB}
    </>
    )
}

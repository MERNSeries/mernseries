import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        numquam nesciunt inventore magni, consequatur omnis, illo quis
        voluptates esse error minima vitae magnam quod animi a doloribus enim
        nulla laborum asperiores, voluptatem facilis accusamus. Ea ipsam,
        voluptas corporis esse excepturi maxime voluptatem optio minus, natus,
        minima explicabo inventore magnam ratione repellat iusto sit officia
        perspiciatis? Magnam eligendi voluptatem nemo consequuntur consectetur.
        Possimus commodi sapiente ex illo iste laboriosam. Recusandae, ipsum.
        Quas, quam rerum unde sit consequuntur, cumque quis deleniti hic a earum
        quia quisquam aliquid mollitia delectus rem? Nulla, numquam molestiae
        corporis ducimus quia dolorem minima quae modi minus nisi.
      </p>
    </>
  );
};

export default Counter;

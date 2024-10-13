import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>Happy Thoughts~</p>
      <p>Ice Cream</p>

      <div style={{ marginTop: "1em" }}>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}

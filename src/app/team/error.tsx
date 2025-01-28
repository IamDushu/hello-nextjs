"use client";

export default function TeamError({ error, reset }: any) {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </>
  );
}

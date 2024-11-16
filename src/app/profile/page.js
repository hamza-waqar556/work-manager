async function takeTime(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

export default async function ProfilePage() {
  await takeTime(3000);

  return <h1> : Profile Page</h1>;
}

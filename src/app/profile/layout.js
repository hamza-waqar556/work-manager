export default function ProfileLayout({ children }) {
  return (
    <div>
      <h1>+ This is the profile header</h1>
      {children}
      <h1>- This is the profile footer</h1>
    </div>
  );
}

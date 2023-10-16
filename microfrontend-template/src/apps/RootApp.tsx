export function RootApp(props: {
  hostName: string;
}) {
  return (
    <div>
      <h1>Host name is: {props.hostName}</h1>
    </div>
  );
}

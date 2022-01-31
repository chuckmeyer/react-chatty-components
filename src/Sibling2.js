function Sibling2(props) {
  return (
    <div className='sibling'>
      <h1>Sibling 2</h1>
      <h2>{ props.message ? props.message: 'Your ad here' }</h2>
    </div>
  );
}

export { Sibling2 };
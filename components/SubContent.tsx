import HasChildern from "../lib/HasChildren";

export default (props: HasChildern) => (
  <div
    style={{
      display: 'inline-block',
      textAlign: 'left',
      lineHeight: '49px',
      height: '49px',
      verticalAlign: 'middle'
    }}
  >
    {props.children}
  </div>
)

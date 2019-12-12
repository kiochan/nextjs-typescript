import HasChildern from "../lib/HasChildren";

export default (props: HasChildern) => (
  <div
    style={{
      color: '#000',
      background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
      height:'100vh',
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    }}
  >
    <style jsx global>{`
      body {
        margin: 0
      }
    `}</style>
    {props.children}
  </div>
)

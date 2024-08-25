import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      stateError: undefined
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.warn(`ERROR: ${error}`)
    console.warn(`ERROR INFO: ${JSON.stringify(errorInfo)}`)

    this.setState({
      stateError: error
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
			<div
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					display: "grid",
					placeContent: "center",
				}}
			>
				{/* <h4>Something went wrong.</h4> */}
        <ErrorBounderyReload stateError={this.state.stateError}/>
			</div>
		);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// const ErrorWrapper = styled(Backdrop)`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	display: grid;
// 	place-items: center;
// `;

const ErrorBounderyReload = ({stateError}) => {

  const navigate = useNavigate();

  const reloadPage = () => {
    navigate(-1)
  }


  // useEffect(() => {
  //   // window.location.reload(-1);
  //   window.history.go(-1);
  // }, [])

  // return <Loading/>
  return (
		// <ErrorWrapper>
			<div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 20}}>
				<h1 >OOPS!</h1>
        <h4>Something went wrong</h4>
				<button variant="contained" onClick={reloadPage} sx={{width:"fit-content", mt: 2}}>
					GO BACK
				</button>
    
 
			</div>
		// </ErrorWrapper>
  );
}
import React, {Component} from 'react';

// const withClassTwo = (WappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WappedComponent {...props} />
//         </div>
//     )
// }
const withClassTwo = (WappedComponent, className) => {
    const WithClassTwo =  class extends Component {
        render() {
            return (
                <div className={className}>
                    <WappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }
    
    return React.forwardRef((props, ref) =>{
        return <WithClassTwo {...props} forwardedRef= {ref} />
    }) 
}
export default withClassTwo;
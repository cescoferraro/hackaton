import * as React from "react"
import { connect } from "react-redux"
import * as CSS from "../hey.pcss"
import TextField from "material-ui/TextField"
import { Card, CardMedia } from "material-ui/Card"

@connect(({ user }) => ({ user }))
export default class Profile extends React.Component<{ user?: any }, {}> {
    constructor(props) { super(props) }
    public render() {
        return (
            <div style={{ overflowX: "hidden", overflowY: "auto" }}>
                <Card className={CSS.profile}>
                    <CardMedia className={CSS.profilePhoto}>
                        <img src={this.props.user.foto} alt="" />
                    </CardMedia>
                    <br />
                    <div>
                        <TextField
                            style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
                            inputStyle={{ fontWeight: "normal", color: "#000" }}
                            floatingLabelStyle={{ fontWeight: "500", color: "#000", fontSize: 18 }}
                            value={this.props.user.name}
                            hintText=""
                            floatingLabelText="Nome"
                            fullWidth={false}
                            disabled={true}
                        /><br />
                        <TextField
                            style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
                            inputStyle={{ fontWeight: "normal", color: "#000" }}
                            floatingLabelStyle={{ fontWeight: "500", color: "#000", fontSize: 18 }}
                            value={this.props.user.email}
                            hintText=""
                            fullWidth={false}
                            floatingLabelText="Email"
                            disabled={true}
                        /><br />
                        <TextField
                            style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
                            inputStyle={{ fontWeight: "normal", color: "#000" }}
                            floatingLabelStyle={{ fontWeight: "500", color: "#000", fontSize: 18 }}
                            value={this.props.user.moedas}
                            type="number"
                            hintText=""
                            fullWidth={false}
                            floatingLabelText="Moedas"
                            disabled={true}
                        /><br />
                    </div>
                </Card>
            </div>
        )
    }
}

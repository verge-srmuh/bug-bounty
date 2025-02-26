// Problem: TCP Handshake with Incorrect State Transitions
// Points: 8/10
// Expected Output: SYN sent, Connection Established, ESTABLISHED
class TCP {
    constructor() {
        this.state = "CLOSED";
    }

    send_SYN() {
        if (this.state === "CLOSED") {
            this.state = "SYN_SENT";
            console.log("SYN sent");
        }
    }

    recv_SYN_ACK() {
        if (this.state === "SYN_SENT") {
            this.state = "ESTABLISHED"; 
            console.log("Connection Established");
        }
    }

    send_ACK() {
        if (this.state === "ESTABLISHED") {
            console.log("ACK Sent, connection stable.");
        }
    }
}

let connection = new TCP();
connection.send_SYN();
connection.recv_SYN_ACK();
console.log(connection.state);
connection.send_ACK();

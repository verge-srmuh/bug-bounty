# Problem: TCP Congestion Control with Broken Window Logic
# Points: 7/10
# Expected Output: 1
class TCP:
    def __init__(self):
        self.cwnd = 1

    def packet_acknowledged(self):
        self.cwnd *= 2  

    def packet_lost(self):
        self.cwnd /= 2  

tcp = TCP()
tcp.packet_acknowledged()
tcp.packet_acknowledged()
tcp.packet_lost()
print(tcp.cwnd)

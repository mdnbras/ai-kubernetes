# Kubernetes On-Premises

- A equipe possui responsabilidade explícita por control plane, etcd e PKI.
- DNS, NTP, load balancing, CNI, CSI e registry são dependências críticas.
- Planeje hardware, capacidade, spare nodes, patches e acesso out-of-band.
- Disaster recovery deve funcionar sem depender do cluster indisponível.


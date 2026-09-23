# AI Kubernetes

Pacote de agentes especialistas para workloads e plataformas Kubernetes no Kiro, com suporte a Amazon EKS e clusters on-premises.

## Capacidades

- descoberta de clusters, versões, ownership, add-ons e ferramentas;
- arquitetura de plataforma, tenancy, namespaces e políticas;
- workloads, configuração, scheduling, autoscaling e rollout;
- rede, ingress, service discovery, storage e segurança;
- observabilidade, backup, upgrades, capacidade e incidentes;
- EKS, incluindo IAM, VPC/CNI, node groups, add-ons e integração AWS;
- on-premises, incluindo control plane, etcd, PKI, CNI/CSI e load balancers.

O pacote preserva Helm, Kustomize, GitOps, policy engine e distribuição existentes. Nunca executa `kubectl apply/delete`, Helm upgrade, drain, upgrade de cluster ou mudança em ambiente sem aprovação.

## Agentes

- `specialists/ai-kubernetes/orchestrator`
- `specialists/ai-kubernetes/platform-architect`
- `specialists/ai-kubernetes/workload-engineer`
- `specialists/ai-kubernetes/network-security-engineer`
- `specialists/ai-kubernetes/reliability-operations-engineer`
- `specialists/ai-kubernetes/eks-engineer`
- `specialists/ai-kubernetes/onprem-engineer`
- `specialists/ai-kubernetes/reviewer`

## Colaboração

Em EKS, `ai-aws` define arquitetura e integrações AWS. `ai-terraform` implementa módulos e recursos de infraestrutura. `ai-kubernetes` mantém contratos do cluster, add-ons e workloads.

```powershell
cd C:\MyPath\aisdlc
npm run specialist -- install ai-kubernetes --target C:\MyPath\minha-plataforma
npm run specialist -- install ai-aws --target C:\MyPath\minha-plataforma
npm run specialist -- install ai-terraform --target C:\MyPath\minha-plataforma
```

## Referências

- [Kubernetes: ambiente de produção](https://kubernetes.io/docs/setup/production-environment/)
- [Kubernetes Security](https://kubernetes.io/docs/concepts/security/)
- [Kubernetes Security Checklist](https://kubernetes.io/docs/concepts/security/security-checklist/)
- [Amazon EKS Best Practices Guide](https://docs.aws.amazon.com/eks/latest/best-practices/introduction.html)

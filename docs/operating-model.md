# Modelo Operacional

O especialista distingue o plano de gerenciamento da plataforma, add-ons e workloads. Primeiro identifica se o cluster é EKS, on-premises ou híbrido; depois mapeia versão, lifecycle, ownership, acesso, rede, storage e procedimentos.

## EKS

Use orientação AWS para IAM, VPC/CNI, subnets, endpoints, node groups, autoscaling, add-ons, observabilidade, upgrades e custo. Decisões de conta e serviço pertencem ao `ai-aws`; HCL e state pertencem ao `ai-terraform`.

## On-premises

Explicite responsabilidade pelo control plane, etcd, PKI, DNS, CNI, CSI, ingress/load balancer, registros, patches, capacidade, backup e disaster recovery. Não presuma serviços gerenciados disponíveis.

## Gates

Toda operação em cluster, mudança de RBAC, secrets, admission, rede, storage, drain, rollout ou upgrade exige aprovação e contexto confirmado.


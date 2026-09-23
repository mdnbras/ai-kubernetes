# Segurança

- RBAC e workload identity seguem mínimo privilégio.
- Aplique Pod Security e securityContext proporcionais ao workload.
- Secrets não entram em manifests versionados nem logs.
- Admission, audit, supply chain e image policy têm owner e break-glass.


# TMS Client: DevOps & Collaborative Tooling (Module 3)

This repository hosts the TypeScript data layer for the Training Management System (TMS). While Modules 1 and 2 focused on engineering logic, Module 3 establishes the **DevOps foundation** required for professional team collaboration.

The goal of this module is to implement a professional Git workflow, ensuring code durability, history clarity, and seamless integration with other developers.

---

## 🌿 Collaborative Workflows
This project demonstrates the exact version control lifecycle used by professional development teams:
1.  **Modern Syntax**: Moving away from ambiguous legacy commands (`checkout`) to explicit ones (`switch`, `restore`).
2.  **Atomic History**: Committing logical changes independently using **Conventional Commits**.
3.  **Conflict Resolution**: Managing parallel development through manual merge conflict resolution.
4.  **History Sanitization**: Squashing messy local development into clean, reviewable feature commits.

---

## 📖 Session Summaries

### Modern Git Syntax & Safety
*   **Safe Branching**: Using `git switch` to prevent accidental data loss during branch transitions.
*   **File Restoration**: Using `git restore` to discard local changes or recover files from specific commits without affecting the HEAD.
*   **Gitignore Discipline**: Implementing a strict `.gitignore` to prevent environment pollution (ignoring `node_modules/`, `dist/`, and compiled `.js` files).

### The "Timeline Panic" (Recovery)
*   **Detached HEAD States**: Understanding how to navigate the commit history without losing work.
*   **Git Reflog**: Using the "hidden journal" of Git to rescue orphaned commits and recover "lost" work that has vanished from the visible log.

### Professional Commit Standards
*   **Atomic Commits**: Following the rule of "one logical change = one commit" to make reverts and code reviews safer.
*   **Conventional Commits**: Using the industry-standard format: `type(scope): description` (e.g., `feat(enrollment): add max capacity validator`).

### Collaborative Integration
*   **Merge Conflicts**: Simulating and resolving parallel code changes in the same file (`assessment-config.ts`).
*   **Squash Workflow**: Using `git reset --soft` to clean up messy local history ("typo fixes", "oops") into a single, high-quality feature commit before pushing to the shared repository.

---

## 🛠️ Requirements
* Git 2.23+ (Required for switch and restore commands)
* GitHub Account for remote synchronization
* Text Editor: VS Code (Recommended for resolving merge conflict markers)

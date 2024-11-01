# EasyMarket Commit Standard

## Commit Message Format

Each commit message must follow this format:

<type>(scope): <subject>
[optional body]
[optional footer(s)]

---

## Commit Types

Use the following types for commit messages:

- **feat**: A new feature for the user or system.
  - Example: `feat(buyer-app): add payment integration`
  
- **fix**: A bug fix.
  - Example: `fix(admin-portal): resolve user access issue`
  
- **refactor**: A code change that neither fixes a bug nor adds a feature.
  - Example: `refactor(landing-page): optimize image loading`
  
- **style**: Code style improvements (formatting, missing semi-colons, etc.).
  - Example: `style(buyer-app): apply consistent formatting`
  
- **docs**: Documentation only.
  - Example: `docs(enterprise-app): update API usage guide`
  
- **test**: Adding or correcting tests.
  - Example: `test(admin-portal): add test cases for product deletion`
  
- **chore**: Changes to the build process, CI/CD configurations, or auxiliary tools.
  - Example: `chore(ci): add GitHub Actions for testing`
  
- **perf**: A change to improve performance.
  - Example: `perf(backend): optimize query execution time`
  
- **revert**: Reverts a previous commit.
  - Example: `revert(enterprise-app): undo payment gateway integration`

---

## Commit Scopes

Define the area affected by the commit using one of the following scopes:

- **landing-page**
- **buyer-app**
- **enterprise-app**
- **admin-portal**
- **backend**
- **shared-components** (for shared components/utilities across apps)
- **ci** (for CI/CD pipeline updates)
- **build** (for build system updates)

---

## Commit Subject

- Use **imperative mood**: “add” instead of “added” or “adds.”
- Keep it concise but descriptive (max 50 characters).
- No period at the end.

---

## Commit Body (Optional)

- Should explain **why** the change was made and provide additional context.
- Include **what** the previous state was, **what** was changed, and **why**.
- Use bullet points if needed.

---

## Commit Footer (Optional)

- Include references to tasks or issues, e.g., Jira or Trello card IDs.
- Example: `Refs #TICKET-123`

---

## Branching Guidelines

To ensure clarity and structure, follow these guidelines for branch names:

1. **Branch Types**:
   - **feature/**: For new features.
   - **fix/**: For bug fixes.
   - **hotfix/**: For critical fixes that need immediate deployment.
   - **refactor/**: For code improvements.
   - **chore/**: For maintenance tasks, like dependency updates.

2. **Branch Naming Convention**: 

<type>/<scope>-<short-description>

Example:
- `feature/buyer-app-add-payment-gateway`
- `fix/landing-page-resolve-styling-issue`
- `hotfix/backend-auth-token-expiry`

3. **Main Branches**:
- **main**: This is the production branch. Only thoroughly tested and approved code should be merged here.
- **dev**: The primary development branch where all features are integrated before moving to production.
- **feature/**: Feature-specific branches that merge into `dev`.

4. **Branch Flow**:
- **Work on feature/bug branches**: Always create a new branch from the `dev` branch for any feature or bug fix.
- **Merge to dev**: Once the feature is complete and reviewed, merge it into the `dev` branch.
- **Merge to main**: Only after testing on `dev` and getting approval should you merge changes into `main`.

---

## Repository Guidelines 

NOTE: `we are using a single repository for the project`

1. **Directory Structure**:
- Keep a well-defined directory structure across the apps and sites. For example:
  ```
  /buyer-app
  /enterprise-app
  /admin-portal
  /backend
  /shared-components
  ```
- Each app and component should maintain its own `README.md`, explaining setup, usage, and any additional configuration.

2. **PRs and Code Reviews**:
- **Pull Requests (PRs)**: Every change must be submitted via a pull request (PR) to `dev` before merging into `main`.
- **Code Reviews**: PRs should be reviewed by at least one team member to ensure code quality and adherence to this commit standard.
- **PR Naming Convention**: Use the same naming structure as the branch naming, e.g., `feature/buyer-app-add-payment-gateway`.

3. **CI/CD**:
- All changes must pass CI checks (e.g., unit tests, linting) before they can be merged into the `dev` or `main` branches.
- Ensure CI/CD tools are configured to automatically run tests and checks for every PR.

4. **Tagging and Releases**:
- **Tags**: Use Git tags for release versions. Format: `v<MAJOR>.<MINOR>.<PATCH>`.
- Example: `v1.0.0`, `v1.1.0`, `v2.0.1`
- **Release Process**: 
  - Merging to `main` triggers a release.
  - Use tags to mark stable releases.

---

## General Guidelines

- **Commit Often**: Break down changes into small, meaningful commits.
- **Atomic Commits**: Each commit should represent a single unit of change.
- **Descriptive Messages**: Make sure your commit message provides enough detail so that anyone can understand the change without looking at the code.

---

## Example Commit Messages

1. **Feature addition**: 
 ```
 feat(enterprise-app): add product search functionality
 ```

2. **Bug fix**: 
 ```
 fix(buyer-app): correct cart item removal issue
 ```

3. **Style update**:
 ```
 style(admin-portal): apply consistent button styling
 ```

4. **Documentation change**: 
 ```
 docs(backend): update API endpoint details in README
 ```

5. **Refactor**: 
 ```
 refactor(shared-components): move reusable button component to common folder
 ```

6. **Performance improvement**:
 ```
 perf(backend): improve query efficiency for large datasets
 ```

---

## Shared Components
We encourage reusing shared components across all parts of the project to maintain consistency and reduce redundancy. Please ensure any changes to shared components are well-tested, as they may affect multiple apps.

### SUGGESTION (List of Possible Shared Components)
- Buttons
- Navigation Bars
- Form Inputs (text fields, checkboxes, etc.)
- Cards (e.g., product cards)
- Modals (pop-up windows)
- Headers/Footers
- Error Handling Components
- Loading Spinners
- Toast Notifications (pop-up messages)

#### Scope for shared component changes
When making changes to shared components, use the `shared-components` scope in your commit message.

Example: `feat(shared-components): add reusable product card`
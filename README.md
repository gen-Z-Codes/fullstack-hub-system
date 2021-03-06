# Steps to setup to local machine

## Fork this repo.

- Click the fork section to for the repo into your remote github account.

## Clone your repo

- In your github page for this repo, copy the repo link
- In your local machine, go to the directory you want to save the file.
- Enter the command for cloning the repo.
  `git clone https://github.com/USERNAME/fullstack-hub-system.git`
  After that: `cd fullstack-hub-system`
  Here USERNAME is your github username.
  This code also creates a remote link `origin`.

## Remote upstream

- Create another remote upstream that connects you to gen-Z's actual repo for this project.
- Enter this in the fullstack-hub-system directory
  `git remote add upstream https://github.com/gen-Z-Codes/fullstack-hub-system.git`
- With this you can make pulls to be up-to-date with the team's repo

## DO THIS BEFORE YOU MAKE A PUSH TO THE TEAM'S REPO

- `git fetch upstream`
- `git merge upstream/main`
- `git push origin main(or the branch you want to commit to)`
  After that, make a pull request and let someone else merge it. This is to ensure that what we have done is not tampered with

### Side Note

- All **Frontend Code** should go into the client directory
- All **Backend Code** the server directory
- Lets not add anything to directories besides these.

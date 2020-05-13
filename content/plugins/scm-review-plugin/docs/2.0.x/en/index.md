---
title: Review Plugin
subtitle: Review Plugin Documentation
---

# Review Plugin
The Review plugin adds the feature of so-called pull or merge requests to SCM-Manager, which allow a "four-eyes-principle" in software development. This is usually used when implementing a feature or fixing a bug.

## Overview
Most of the extensions that come with the Review plugin can be found inside each repository under the tab "Pull Requests". Once the tab is open it shows a list of all pull requests that are open.

The list offers these options:

* open (standard): All pull requests that are open.
* mine: All pull requests that are assigned to the current user.
* to be reviewed: All pull requests that the current user is supposed to review.
* all: All pull requests.
* rejected: All pull requests that were rejected.
* merged: All pull requests that were accepted.

The list has these columns, which can be sorted ascending or descending by clicking on the title of the column.

* Title: The name that gave the author to the pull request.
* Offene Aufgaben:  Number of open tasks for this pull request.
* Source Branch: Name of the branch that contains the changes (source).
* Target Branch: Name of the branch that is supposed to get the changes (target).
* Author: Name of the creator of the pull request.
* Date: Age of the pull request.
* Reviewer:  Icon which shows the requested reviewers for the pull request.
* Status: Status of the pull request (Open/Merged/Rejected)

![Pull Request Übersicht](images/review-plugin/pullRequest-overview.png)

## Create a Pull Request
A new pull request for the repository can be created with the button below the list. It is mandatory to provide the source and the target branch as well as a title. Optionally it is possible to provide a description (Markdown is supported) and to request specific reviewers.
If reviewers were requested, they receive an e-mail once the pull request is created.

The bottom of the page shows the differences between the two selected branches based on commits and on file level (diff viewer). Each pull request gets a serial number that can be used to clearly identify it in the context.


![Neuen Pull Request erstellen](images/review-plugin/pullRequests_createPR.png)

## Details Page
The details page is divided into two parts. The upper part shows all information and options for the pull request. The lower part shows the changes of the pull request in different tabs and it offers the possibility to leave comments.

#### Comments
The “Comments” tab contains all comments and tasks that were created for the pull request.

![Pull Request - Comments](images/review-plugin/pullRequest-comments.png)

#### Commits
The “Commits” tab shows all commits from the source branch starting from where both branches differ.

![Pull Request - Commits](images/review-plugin/pullRequest-commits.png)

#### Diff
The “Diff” tab shows the changes between the target and source branch on a file level.

The changes are indicated based on the established format:

* **White:** no changes
* **Green:** Line added
* **Red:** Line deleted
* **Red + green:** Line changed

![Pull Request - Diffs](images/review-plugin/pullRequest-diffs.png)

#### Conflicts
In the case that there are merge conflicts in a pull request, there is the additional tab “Conflicts”.  This tab shows the merge conflicts between the source and the target branch.

Above the conflict itself is a hint on how the conflict could be resolved.

The conflict is shown in the Git-conflict format within a diff in yellow. The head of the conflict is highlighted with a tag that indicates where the conflict originated.

These tags are available:

* **Conflict:** The file was modified in both branches.
* **Deleted in target:** The file was changed in the source branch and deleted in the target branch.
* **Deleted in source:** The file was deleted in the source branch and changed in the target branch.
* **Added in source and target:** The file was added with the same name and path, but with different content in both branches. 

![Pull Request - Diffs](images/review-plugin/pullRequest-Conflict.png)

## Working with Pull Requests
To work efficiently with pull requests there are several ways to exchange information between the author and the reviewer(s).

#### Add reviewer
When creating or editing his pull request, the author can add reviewer(s). All reviewers are informed about the upcoming review by e-mail and they are listed in the details of the pull request.

#### Subscribe to a pull request
Reviewers can subscribe (“+”) or unsubscribe (“-“) from a pull request in the upper right corner of the details page of the pull request. Subscribers are informed about changes and comments on the pull request by e-mail.

#### Approve pull request
After a successful review, the reviewer can approve the pull request for a merge. At this point, the approval is merely an information for the author that the review is done. Once a reviewer approved a review, there is a green checkmark behind his name in the list of reviewers.

#### Create comments
There are three different kinds of comments for pull requests.

* **General comment:** Is related to the pull request in general. It can be created by using the comment editor in the “Comments” tab.
* **File comment:** Can be created in the head of a file in the “Diff” tab. There is an “Add comment for file” button with a speech bubble icon.
* **Line comment:** Can be created by clicking on a line in the diff view.

All comments are shown in the “Comments” tab. The file and line comments are also shown in the “Diff” tab.

![Pull Request - Create comment](images/review-plugin/pullRequest-createComment.png)

There are these options to interact with a comment:

|Icon|Meaning|
|-|--------------------------------------------|
|![Loeschen](images/review-plugin/icon-delete.png){ height=5mm }|Delete comment|
|![Bearbeiten](images/review-plugin/icon-edit.png){ height=5mm }|Edit comment|
|![Task](images/review-plugin/icon-make-task.png){ height=5mm }|Convert comment into task|
|![Kommentar](images/review-plugin/icon-make-comment.png){ height=5mm }|Convert task into comment|
|![Reply](images/review-plugin/icon-reply.png){ height=5mm }|Reply to comment or task|
|![Done](images/review-plugin/icon-done.png){ height=5mm }|Mark task as done|
|![Wieder eröffnen](images/review-plugin/icon-reopen.png){ height=5mm }|Mark task as *not* done|

#### Outdated comments
As soon as there are new commits in a pull request, some comments are marked as outdated. General comments are outdated after each new commit. File and line comments are outdated once a commit changes the related file.

![Pull Request - Outdated comment](images/review-plugin/pullRequest-outdatedComment.png)

These comments are marked with an “outdated” tag. By clicking on the blue “outdated” tag or a blue file name the original context of the comment is shown. This allows to backtrace why a comment was made.

![Pull Request - Outdated context](images/review-plugin/pullRequest-outdatedContext.png)


Create tasks
If a reviewer finds errors or wants to propose changes, he can do that by using tasks. The comments editor can be changed into a task editor by changing the radio button. Tasks are shown in the details page of the pull request and in the list of pull requests, e.g. "2 / 5 tasks done".

Open tasks can be marked as done using the “Mark as done” icon. At this point tasks solely informative and therefore no condition to merge a pull request.

![Pull Request - Create task](images/review-plugin/pullRequest-createTask.png)

#### Reject a pull request
If a reviewer thinks that a pull request should not be merged, he can reject it. That should happen in coordination with the author. It is not possible to reopen a rejected pull request. Instead a new pull request has to be opened.

#### Merge a pull request 
If a pull request can be merged, the changes can be applied in different ways after clicking the button "Merge Pull Request":

* **Merge Commit:** The branches are merged with a new commit.
* **Fast forward, if possible:** If possible, the target branch is set to the state of the source branch without a merge. If this is not possible, a regular merge commit is created.
* **Squash:** All changes from the source branch are condensed into one commit on the target branch. The commit history of the source branch is not transferred to the target branch.

If desired, it is possible to replace the default message with an individual commit message. If the box “Delete branch” is checked, the source branch is deleted from the repository after the successful merge. 

In case of a merge conflict, the pull request cannot be merged automatically. The conflicts have to be resolved manually before the merge.

![Pull Request - Merge-Modal](images/review-plugin/pullRequest-MergeModal.png)


## Permissions
The Review plugin comes with these permissions:

* Global permissions:
    * Read all pull requests: Is allowed to read all pull requests from all repositories
    * Edit all pull requests: Is allowed to create, comment and reject pull requests for all repositories
* Repository-specific permissions:
    * Create pull requests: Is allowed to create new pull requests
    * Read pull requests: Is allowed to read pull requests
    * Comment pull requests: Is allowed to comment on pull requests
    * Edit pull requests: Is allowed to edit the title, reviewers and comments from other users in pull requests
    * Merge/reject pull requests: Is allowed to accept (merge) or reject pull requests (the merge requires the push permission)

Users with the READ role can automatically read the pull requests of the repository. The WRITE role adds the permissions to create, comment accept resp. reject pull requests.

## Protect branches
### Locally
The repository settings have the tab "Pull Requests". There, an additional repository-specific protection for branches can be activated. The protection can be activated for specific branches or based on a pattern (e.g. “feature/*”). If a branch is protected, it can only be modified by using pull requests. Thanks to this constraint a review workflow can be enforced.

### Globally
In addition, there is also the option to define an intra-repository write protection through the administration area. There it can be stated that it is not allowed by default to directly push changes onto the “master” branch if there is no other configuration in place for the repository.

If repository owners should not be allowed to define their own branch protection, the option can be deactivated globally for the SCM-Manager instance using the checkbox.

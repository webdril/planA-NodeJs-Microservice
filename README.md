This repository contains the following files;
    The NodeJs/ExpressJs Microservice application files(index.js, package.json, README.md, package-lock.json).<br>
    Docker file used in containerizing the Microservice application.<br>
    Kubernetes manifest file in YAML used in deploying the Microservice container into the EKS cluster.<br>

Before proceeding with the steps below, please download terraform on your pc, if you dont have one. You can download terraform from the following url; https://www.terraform.io/downloads<br>

To install terraform on a windows pc, please visit the following page: https://docs.microsoft.com/en-us/azure/developer/terraform/get-started-windows-bash?tabs=bash#4-install-terraform-for-windows<br>

Before you can run the microservice, you need to have the eks cluster running on aws, the following guide will show you how to get that working.<br>

## How to run the Microservice application.

**Step 1:** Create a folder on your pc/mac desktop and name the folder projects.

**Step 2:** visit the following terraform repository to get the configuration files needed to create the EKS cluster: https://github.com/webdril/planA-Ekscluster-project

**Step 3:** Open the projects folder from your file explorer, and once inside the folder, right click on an empty space and choose "open in terminal" from the list of options presented to you.


**Step 4:** While in the command prompt, type the following without the quotations "git clone https://github.com/webdril/planA-Ekscluster-project.git"<br>
The command above will clone the terraform repository into a folder named planA-Ekscluster-project.<br>
This folder was created automatically by the git clone https://github.com/webdril/planA-Ekscluster-project.git command, and it is created inside your projects folder that was created in step 1 above.

**Step 5:** Open the newly created folder called planA-Ekscluster-project, and once inside the folder, right click on an empty space and choose "open in terminal" from the list of options presented to you.

**Step 6:** Once in the terminal window also known as cli, type terraform init

**Step 7:** Then type terraform plan to be sure everything is working well.

**Step 8:** Then type terraform apply, and once a question is asked in the cli type yes to proceed with the deployment of the infrastructure

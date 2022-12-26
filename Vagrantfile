# -- mode: ruby --
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  # Do not pay attention to this parameter
  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vm.provider :virtualbox do |vb|
      config.vbguest.auto_update = false
    end
  end

  config.vm.define "server" do |server|
    # Specify the Vagrant box to use
    server.vm.box = "centos/7"
    # Specify the VM ip address
    server.vm.network :private_network, ip: "192.168.56.2"
    # Specify the VM specs when using the Virtualbox provisioner
    server.vm.provider "virtualbox" do |vb|
      # vb.name =  "centos-7-1-1.x86_64_1671031625007_34247"
      vb.name =  "project-devops"
      # VM RAM in MB
      vb.memory = 2048
      # VM CPUs
      vb.cpus = 1
    end
    config.vm.provider "vmware_desktop" do |vmware|
      vmware.vmx["memsize"] = "2048"
      vmware.vmx["numvcpus"] = "1"
    end
  end
  # Use Vagrant Ansible provisioner
  config.vm.provision "ansible_local" do |ansible|
    # The path to the playbooks entry point
    ansible.playbook = "playbooks/run.yml"
    # Only run the roles with these tags
    ansible.tags = "install"
  end

end
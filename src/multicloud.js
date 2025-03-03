const provider2auth = {
    "ALIYUN_ECS": {
        "title": "Alibaba Cloud Elastic Compute Service (ECS)",
        "params": ["ALIYUN_ACCESS_ID", "ALIYUN_SECRET_KEY", "ALIYUN_REGION"],
        "favicon": "https://www.alibabacloud.com/favicon.ico"
    },
    "AURORACOMPUTE": {
        "title": "Aurora Compute",
        "params": ["AURORA_ACCESS_ID", "AURORA_SECRET_KEY"],
        "favicon": ""
    },
    "AZURE": {
        "title": "Microsoft Azure (Classic)",
        "params": ["AZURE_SUBSCRIPTION_ID", "AZURE_KEY_FILE"],
        "favicon": "https://azure.microsoft.com/favicon.ico"
    },
    "AZURE_ARM": {
        "title": "Microsoft Azure Resource Manager (ARM)",
        "params": ["AZURE_TENANT_ID", "AZURE_SUBSCRIPTION_ID", "AZURE_KEY", "AZURE_SECRET"],
        "favicon": "https://azure.microsoft.com/favicon.ico"
    },
    "CLOUDSCALE": {
        "title": "cloudscale.ch",
        "params": ["CLOUDSCALE_TOKEN"],
        "favicon": "https://www.cloudscale.ch/favicon.ico"
    },
    "CLOUDSIGMA": {
        "title": "CloudSigma",
        "params": ["CLOUDSIGMA_USERNAME", "CLOUDSIGMA_PASSWORD", "CLOUDSIGMA_REGION"],
        "favicon": "https://www.cloudsigma.com/favicon.ico"
    },
    "CLOUDSTACK": {
        "title": "Apache CloudStack",
        "params": ["CLOUDSTACK_KEY", "CLOUDSTACK_SECRET", "CLOUDSTACK_HOST", "CLOUDSTACK_PATH"],
        "favicon": "https://cloudstack.apache.org/favicon.ico"
    },
    "DIGITAL_OCEAN": {
        "title": "DigitalOcean",
        "params": ["DIGITAL_OCEAN_ACCESS_TOKEN"],
        "favicon": "https://www.digitalocean.com/favicon.ico"
    },
    "DIMENSIONDATA": {
        "title": "Dimension Data (NTT Ltd.)",
        "params": ["DIMENSIONDATA_USERNAME", "DIMENSIONDATA_PASSWORD", "DIMENSIONDATA_REGION"],
        "favicon": "https://services.global.ntt/favicon.ico"
    },
    "EC2": {
        "title": "Amazon Web Services (AWS) - EC2",
        "params": ["AWS_ACCESS_ID", "AWS_SECRET_KEY", "AWS_REGION"],
        "favicon": "https://aws.amazon.com/favicon.ico"
    },
    "EXOSCALE": {
        "title": "Exoscale",
        "params": ["EXOSCALE_KEY", "EXOSCALE_SECRET", "EXOSCALE_HOST", "EXOSCALE_PATH"],
        "favicon": "https://www.exoscale.com/favicon.ico"
    },
    "GANDI": {
        "title": "Gandi.net",
        "params": ["GANDI_KEY"],
        "favicon": "https://www.gandi.net/favicon.ico"
    },
    "GCE": {
        "title": "Google Compute Engine (GCE)",
        "params": ["GCE_EMAIL", "GCE_KEY_FILE", "GCE_PROJECT_ID", "GCE_DATACENTER"],
        "favicon": "https://cloud.google.com/favicon.ico"
    },
    "GRIDSCALE": {
        "title": "gridscale",
        "params": ["GRIDSCALE_UUID", "GRIDSCALE_TOKEN"],
        "favicon": "https://gridscale.io/favicon.ico"
    },
    "IKOULA": {
        "title": "Ikoula",
        "params": ["IKOULA_KEY", "IKOULA_SECRET", "IKOULA_HOST", "IKOULA_PATH"],
        "favicon": "https://www.ikoula.com/favicon.ico"
    },
    "INTERNETSOLUTIONS": {
        "title": "Internet Solutions",
        "params": ["INTERNETSOLUTIONS_USERNAME", "INTERNETSOLUTIONS_PASSWORD"],
        "favicon": "https://www.is.co.za/favicon.ico"
    },
    "KAMATERA": {
        "title": "Kamatera",
        "params": ["KAMATERA_CLIENT_ID", "KAMATERA_PASSWORD"],
        "favicon": "https://www.kamatera.com/favicon.ico"
    },
    "LIBVIRT": {
        "title": "libvirt",
        "params": ["LIBVIRT_URI"],
        "favicon": "https://libvirt.org/favicon.ico"
    },
    "MAXIHOST": {
        "title": "Maxihost",
        "params": ["MAXIHOST_TOKEN"],
        "favicon": "https://www.maxihost.com/favicon.ico"
    },
    "NIMBUS": {
        "title": "Nimbus",
        "params": ["NIMBUS_ACCESS_ID", "NIMBUS_SECRET_KEY", "NIMBUS_REGION"],
        "favicon": ""
    },
    "NTTA": {
        "title": "NTT America",
        "params": ["NTTA_USERNAME", "NTTA_PASSWORD", "NTTA_REGION"],
        "favicon": "https://www.ntt.com/favicon.ico"
    },
    "NTTCCIS": {
        "title": "NTT Communications Cloud Infrastructure Services",
        "params": ["NTTCCIS_KEY", "NTTCCIS_SECRET", "NTTCCIS_REGION"],
        "favicon": "https://www.ntt.com/favicon.ico"
    },
    "ONAPP": {
        "title": "OnApp",
        "params": ["ONAPP_USERNAME", "ONAPP_PASSWORD"],
        "favicon": "https://onapp.com/favicon.ico"
    },
    "OPENSTACK": {
        "title": "OpenStack",
        "params": ["OPENSTACK_USERNAME", "OPENSTACK_PASSWORD", "OPENSTACK_BASE_URL", "OPENSTACK_TENANT_NAME"],
        "favicon": "https://www.openstack.org/favicon.ico"
    },
    "OUTSCALE": {
        "title": "Outscale",
        "params": ["OUTSCALE_KEY", "OUTSCALE_SECRET", "OUTSCALE_REGION", "OUTSCALE_SERVICE"],
        "favicon": "https://us.outscale.com/favicon.ico"
    },
    "OUTSCALEINC": {
        "title": "Outscale Inc.",
        "params": ["OUTSCALEINC_ACCESS_ID", "OUTSCALEINC_SECRET_KEY", "OUTSCALEINC_REGION"],
        "favicon": "https://us.outscale.com/favicon.ico"
    },
    "OUTSCALESAS": {
        "title": "Outscale SAS",
        "params": ["OUTSCALESAS_ACCESS_ID", "OUTSCALESAS_SECRET_KEY", "OUTSCALESAS_REGION"],
        "favicon": "https://fr.outscale.com/favicon.ico"
    },
    "OVH": {
        "title": "OVHcloud",
        "params": ["OVH_KEY", "OVH_SECRET", "OVH_PROJECT_ID", "OVH_CONSUMER_KEY"],
        "favicon": "https://www.ovhcloud.com/favicon.ico"
    },
    "RACKSPACE": {
        "title": "Rackspace",
        "params": ["RACKSPACE_USERNAME", "RACKSPACE_API_KEY", "RACKSPACE_REGION"],
        "favicon": "https://www.rackspace.com/favicon.ico"
    },
    "SCALEWAY": {
        "title": "Scaleway",
        "params": ["SCALEWAY_ACCESS_KEY", "SCALEWAY_SECRET_TOKEN"],
        "favicon": "https://www.scaleway.com/favicon.ico"
    },
    "UPCLOUD": {
        "title": "UpCloud",
        "params": ["UPCLOUD_USERNAME", "UPCLOUD_PASSWORD", "UPCLOUD_REGION"],
        "favicon": "https://www.upcloud.com/favicon.ico"
    },
    "VCLOUD": {
        "title": "VMware vCloud",
        "params": ["VCLOUD_ACCESS_KEY", "VCLOUD_SECRET", "VCLOUD_REGION"],
        "favicon": "https://www.vmware.com/files/favicon.ico"
    },
    "VULTR": {
        "title": "Vultr",
        "params": ["VULTR_API_KEY"],
        "favicon": "https://www.vultr.com/favicon.ico"
    }
};

const providers = Object.keys(provider2auth).sort();
let override_provider = null;

document.addEventListener('DOMContentLoaded', () => {
    const providerSelect = document.getElementById("providers-select");
    let selectedProvider = null;
    for (const provider of providers) {
        const option = document.createElement("option");
        option.text = provider2auth[provider].title;
        option.value = provider;
        providerSelect.appendChild(option);
    }

    providerSelect.addEventListener("change", () => {
        let providerForm = document.getElementById("providers-form");
        if (providerSelect.value === selectedProvider) {
            return;
        }
        selectedProvider = providerSelect.value;

        if (providerForm != null) {
            providerForm.remove();
        }
        if (!selectedProvider || !provider2auth[selectedProvider]) {
            console.warn("Invalid provider selected:", selectedProvider);
            return;
        }

        const newForm = document.createElement("form");
        newForm.id = "providers-form";
        const outsideProviderForm = document
            .getElementById("outside-provider-form");
        outsideProviderForm.appendChild(newForm);
        providerForm = document.getElementById("providers-form");

        let largest = Math.max(...provider2auth[selectedProvider].params.map(p => p.length));

        const add_trailing = (s) => {
            const n = 4 + (largest - s.length);
            for (let i = 0; i < n; i++)
                s += '.';
            return `${s}.........:`;
        };

        const niceProviderParamName = (key) => {
            const first_un = key.indexOf("_");
            if (first_un > -1) {
                const [first, ...rest] = key.split("_");
                return `${first} ${rest.map(s => s.toLowerCase()).join(" ")}`;
            }
            return key;
        };
        for (const param of provider2auth[providerSelect.value].params) {
            const inputOuterDiv = document.createElement("div");
            inputOuterDiv.className = "flex";

            const label = document.createElement("label");
            label.className = "yellow-255-text flex-item";
            label.textContent = add_trailing(param);

            inputOuterDiv.appendChild(label);

            const inputElement = document.createElement("input");
            inputElement.style.width = "100%";
            inputElement.className = "tui-input flex-item";
            inputElement.placeholder = `Enter your ${niceProviderParamName(param)}`;
            if (param.indexOf("SECRET") > -1 || param.indexOf("PASSWORD") > -1) {
                inputElement.type = "password";
            }
            inputElement.name = param;

            inputOuterDiv.appendChild(inputElement);

            providerForm.appendChild(inputOuterDiv);
        }
        const submitButton = document.createElement("button");
        submitButton.className = "tui-button";
        submitButton.style.margin = '5px';
        submitButton.textContent = "Save to localStorage";
        // noinspection JSValidateTypes
        submitButton.onsubmit = "return false;";
        submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            const o = {};
            for (const input of providerForm.getElementsByTagName("input")) {
                if (input.value != null && input.value !== "") {
                    o[input.name] = input.value;
                    localStorage.setItem(input.name, input.value);
                }
            }
            console.info("Updated localStorage with:", o, ';');
        });

        providerForm.appendChild(submitButton);

        localStorage.setItem("provider", selectedProvider);
        console.info("providerSelected is:", selectedProvider);
    });
});

let py_globals;

async function main() {
    const env = {};
    let last_provider = null;
    for (const [provider, provider_key] of providers) {
        const val = localStorage.getItem(provider_key);
        if (val != null) {
            env[provider_key] = val;
            last_provider = provider;
        }
    }
    Object.entries(localStorage).forEach(([key, value]) => {
        if (value != null) {
            env[key] = value;
        }
    });
    if (override_provider != null)
        env.provider = override_provider;
    else if (last_provider != null)
        env.provider = last_provider;

    let pyodide = await loadPyodide({"env": env});
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    await micropip.install("ssl");
    await micropip.install("apache-libcloud");
    await pyodide.runPython(`
        import os
        import pprint

        import libcloud
        from libcloud.compute.types import Provider
        from libcloud.compute.providers import get_driver
        
        pp = pprint.PrettyPrinter(indent=4).pprint

        print('Loaded Apache Libcloud', libcloud.__version__)

        provider2auth = {
          "ALIYUN_ECS": ("ALIYUN_ACCESS_ID", "ALIYUN_SECRET_KEY", "ALIYUN_REGION"),
          "AURORACOMPUTE": ("AURORA_ACCESS_ID", "AURORA_SECRET_KEY"),
          "AZURE": ("AZURE_SUBSCRIPTION_ID", "AZURE_KEY_FILE"),
          "AZURE_ARM": ("AZURE_TENANT_ID", "AZURE_SUBSCRIPTION_ID", "AZURE_KEY", "AZURE_SECRET"),
          "CLOUDSCALE": ("CLOUDSCALE_TOKEN",),
          "CLOUDSIGMA": ("CLOUDSIGMA_USERNAME", "CLOUDSIGMA_PASSWORD", "CLOUDSIGMA_REGION"),
          "CLOUDSTACK": ("CLOUDSTACK_KEY", "CLOUDSTACK_SECRET", "CLOUDSTACK_HOST", "CLOUDSTACK_PATH"),
          "DIGITAL_OCEAN": ("DIGITAL_OCEAN_ACCESS_TOKEN",),
          "DIMENSIONDATA": ("DIMENSIONDATA_USERNAME", "DIMENSIONDATA_PASSWORD", "DIMENSIONDATA_REGION"),
          "EC2": ("AWS_ACCESS_ID", "AWS_SECRET_KEY", "AWS_REGION"),
          "EXOSCALE": ("EXOSCALE_KEY", "EXOSCALE_SECRET", "EXOSCALE_HOST", "EXOSCALE_PATH"),
          "GANDI": ("GANDI_KEY",),
          "GCE": ("GCE_EMAIL", "GCE_KEY_FILE", "GCE_PROJECT_ID", "GCE_DATACENTER"),
          "GRIDSCALE": ("GRIDSCALE_UUID", "GRIDSCALE_TOKEN"),
          "IKOULA": ("IKOULA_KEY", "IKOULA_SECRET", "IKOULA_HOST", "IKOULA_PATH"),
          "INTERNETSOLUTIONS": ("INTERNETSOLUTIONS_USERNAME", "INTERNETSOLUTIONS_PASSWORD"),
          "KAMATERA": ("KAMATERA_CLIENT_ID", "KAMATERA_PASSWORD"),
          "LIBVIRT": ("LIBVIRT_URI",),
          "MAXIHOST": ("MAXIHOST_TOKEN",),
          "NIMBUS": ("NIMBUS_ACCESS_ID", "NIMBUS_SECRET_KEY", "NIMBUS_REGION"),
          "NTTA": ("NTTA_USERNAME", "NTTA_PASSWORD", "NTTA_REGION"),
          "NTTCCIS": ("NTTCCIS_KEY", "NTTCCIS_SECRET", "NTTCCIS_REGION"),
          "ONAPP": ("ONAPP_USERNAME", "ONAPP_PASSWORD"),
          "OPENSTACK": ("OPENSTACK_USERNME", "OPENSTACK_PASSWORD", "OPENSTACK_BASE_URL", "OPENSTACK_TENANT_NAME"),
          "OUTSCALE": ("OUTSCALE_KEY", "OUTSCALE_SECRET", "OUTSCALE_REGION", "OUTSCALE_SERVICE"),
          "OUTSCALEINC": ("OUTSCALEINC_ACCESS_ID", "OUTSCALEINC_SECRET_KEY", "OUTSCALEINC_REGION"),
          "OUTSCALESAS": ("OUTSCALESAS_ACCESS_ID", "OUTSCALESAS_SECRET_KEY", "OUTSCALESAS_REGION"),
          "OVH": ("OVH_KEY", "OVH_SECRET", "OVH_PROJECT_ID", "OVH_CONSUMER_KEY"),
          "RACKSPACE": ("RACKSPACE_USERNAME", "RACKSPACE_API_KEY", "RACKSPACE_REGION"),
          "SCALEWAY": ("SCALEWAY_ACCESS_KEY", "SCALEWAY_SECRET_TOKEN"),
          "UPCLOUD": ("UPCLOUD_USERNAME", "UPCLOUD_PASSWORD", "UPCLOUD_REGION"),
          "VCLOUD": ("VCLOUD_ACCESS_KEY", "VCLOUD_SECRET", "VCLOUD_REGION"),
          "VULTR": ("VULTR_API_KEY",)
        }

        pp(os.environ)
        cls = get_driver(getattr(Provider, os.environ["provider"]))
        # TODO: kwargs here
        driver = cls(*(
          os.environ[key]
          for key in provider2auth[os.environ["provider"]]
        ))

        sizes = driver.list_sizes()
        pp(sizes)
        obj_to_d = (
            lambda obj: obj
            if isinstance(obj, dict)
            else {k: getattr(obj, k) for k in dir(obj) if not k.startswith("_")}
        )
        add_missing_uuid = lambda obj: obj if hasattr(obj, "_uuid") else setattr(obj, "_uuid", obj.uuid) or obj 
        sizes_to_json = tuple(map(obj_to_d, map(add_missing_uuid, sizes)))
      `);
    py_globals = pyodide.globals
}

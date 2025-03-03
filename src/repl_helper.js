const provider2auth = {
    "ALIYUN_ECS": ["ALIYUN_ACCESS_ID", "ALIYUN_SECRET_KEY", "ALIYUN_REGION"],
    "AURORACOMPUTE": ["AURORA_ACCESS_ID", "AURORA_SECRET_KEY"],
    "AZURE": ["AZURE_SUBSCRIPTION_ID", "AZURE_KEY_FILE"],
    "AZURE_ARM": ["AZURE_TENANT_ID", "AZURE_SUBSCRIPTION_ID", "AZURE_KEY", "AZURE_SECRET"],
    "CLOUDSCALE": ["CLOUDSCALE_TOKEN"],
    "CLOUDSIGMA": ["CLOUDSIGMA_USERNAME", "CLOUDSIGMA_PASSWORD", "CLOUDSIGMA_REGION"],
    "CLOUDSTACK": ["CLOUDSTACK_KEY", "CLOUDSTACK_SECRET", "CLOUDSTACK_HOST", "CLOUDSTACK_PATH"],
    "DIGITAL_OCEAN": ["DIGITAL_OCEAN_ACCESS_TOKEN"],
    "DIMENSIONDATA": ["DIMENSIONDATA_USERNAME", "DIMENSIONDATA_PASSWORD", "DIMENSIONDATA_REGION"],
    "EC2": ["AWS_ACCESS_ID", "AWS_SECRET_KEY", "AWS_REGION"],
    "EXOSCALE": ["EXOSCALE_KEY", "EXOSCALE_SECRET", "EXOSCALE_HOST", "EXOSCALE_PATH"],
    "GANDI": ["GANDI_KEY"],
    "GCE": ["GCE_EMAIL", "GCE_KEY_FILE", "GCE_PROJECT_ID", "GCE_DATACENTER"],
    "GRIDSCALE": ["GRIDSCALE_UUID", "GRIDSCALE_TOKEN"],
    "IKOULA": ["IKOULA_KEY", "IKOULA_SECRET", "IKOULA_HOST", "IKOULA_PATH"],
    "INTERNETSOLUTIONS": ["INTERNETSOLUTIONS_USERNAME", "INTERNETSOLUTIONS_PASSWORD"],
    "KAMATERA": ["KAMATERA_CLIENT_ID", "KAMATERA_PASSWORD"],
    "LIBVIRT": ["LIBVIRT_URI"],
    "MAXIHOST": ["MAXIHOST_TOKEN"],
    "NIMBUS": ["NIMBUS_ACCESS_ID", "NIMBUS_SECRET_KEY", "NIMBUS_REGION"],
    "NTTA": ["NTTA_USERNAME", "NTTA_PASSWORD", "NTTA_REGION"],
    "NTTCCIS": ["NTTCCIS_KEY", "NTTCCIS_SECRET", "NTTCCIS_REGION"],
    "ONAPP": ["ONAPP_USERNAME", "ONAPP_PASSWORD"],
    "OPENSTACK": ["OPENSTACK_USERNME", "OPENSTACK_PASSWORD", "OPENSTACK_BASE_URL", "OPENSTACK_TENANT_NAME"],
    "OUTSCALE": ["OUTSCALE_KEY", "OUTSCALE_SECRET", "OUTSCALE_REGION", "OUTSCALE_SERVICE"],
    "OUTSCALEINC": ["OUTSCALEINC_ACCESS_ID", "OUTSCALEINC_SECRET_KEY", "OUTSCALEINC_REGION"],
    "OUTSCALESAS": ["OUTSCALESAS_ACCESS_ID", "OUTSCALESAS_SECRET_KEY", "OUTSCALESAS_REGION"],
    "OVH": ["OVH_KEY", "OVH_SECRET", "OVH_PROJECT_ID", "OVH_CONSUMER_KEY"],
    "RACKSPACE": ["RACKSPACE_USERNAME", "RACKSPACE_API_KEY", "RACKSPACE_REGION"],
    "SCALEWAY": ["SCALEWAY_ACCESS_KEY", "SCALEWAY_SECRET_TOKEN"],
    "UPCLOUD": ["UPCLOUD_USERNAME", "UPCLOUD_PASSWORD", "UPCLOUD_REGION"],
    "VCLOUD": ["VCLOUD_ACCESS_KEY", "VCLOUD_SECRET", "VCLOUD_REGION"],
    "VULTR": ["VULTR_API_KEY"]
};

const providers = Object.keys(provider2auth).sort();
let override_provider = null;

document.addEventListener('DOMContentLoaded', () => {
    const providerSelect = document.getElementById("providers-select");
    let selectedProvider = null;
    for (const provider of providers) {
        const option = document.createElement("option");
        option.text = provider;
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

        let largest = Math.max(...provider2auth[selectedProvider].map(k => k.length));

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
        for (const key of provider2auth[providerSelect.value]) {
            const inputOuterDiv = document.createElement("div");
            inputOuterDiv.className = "flex";

            const label = document.createElement("label");
            label.className = "yellow-255-text flex-item";
            label.textContent = add_trailing(key);

            inputOuterDiv.appendChild(label);

            const inputElement = document.createElement("input");
            inputElement.style.width = "100%";
            inputElement.className = "tui-input flex-item";
            inputElement.placeholder = `Enter your ${niceProviderParamName(key)}`;
            if (key.indexOf("SECRET") > -1 || key.indexOf("PASSWORD") > -1) {
                inputElement.type = "password";
            }
            inputElement.name = key;

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
    Object.entries(localStorage).forEach(([ key, value ]) => {
        if (value != null) {
            env[key] = value;
        }
    });
    if (override_provider != null)
        env.provider = override_provider;
    else if (last_provider != null)
        env.provider = last_provider;

    console.info("Setting env for Pyodide to");
    console.dir(env)
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
      `);
}

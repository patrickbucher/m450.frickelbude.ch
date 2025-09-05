const pricing = {
  aws: {
    requestPrice: 0.22 / 1e6,
    gbSecPrice: 0.0000183334,
  },
  azure: {
    requestPrice: 0.4 / 1e6,
    gbSecPrice: 0.000026,
  },
  gcp: {
    cpuSecPrice: 0.000011244,
    gbSecPrice: 0.000001235,
  },
};

const calculateGbSecPrice = (requests, seconds, memory, gbSecPrice) => {
  return requests * seconds * (memory / 1024) * gbSecPrice;
};

const calculateAwsPricing = (requests, seconds, memory) => {
  return (
    requests * pricing.aws.requestPrice +
    calculateGbSecPrice(requests, seconds, memory, pricing.aws.gbSecPrice)
  );
};

const calculateAzurePricing = (requests, seconds, memory) => {
  return (
    requests * pricing.azure.requestPrice +
    calculateGbSecPrice(requests, seconds, memory, pricing.azure.gbSecPrice)
  );
};

const calculateGcpPricing = (requests, seconds, memory) => {
  return (
    requests * pricing.gcp.cpuSecPrice * seconds +
    calculateGbSecPrice(requests, seconds, memory, pricing.gcp.gbSecPrice)
  );
};

const calculate = (requests, seconds, memory) => {
  return new Map([
    ["AWS", calculateAwsPricing(requests, seconds, memory)],
    ["Azure", calculateAzurePricing(requests, seconds, memory)],
    ["GCP", calculateGcpPricing(requests, seconds, memory)],
  ]);
};

document.getElementById('calculateButton').addEventListener('click', function() {
  // Get input values
  const leadsGenerated = parseFloat(document.getElementById('leadsGenerated').value);
  const conversionRate = parseFloat(document.getElementById('conversionRate').value) / 100;
  const retainedCustomers = parseFloat(document.getElementById('retainedCustomers').value);
  const revenuePerCustomer = parseFloat(document.getElementById('revenuePerCustomer').value);
  const grossMargin = parseFloat(document.getElementById('grossMargin').value) / 100;
  const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);

  const leadsGeneratedImprovement = 1 + parseFloat(document.getElementById('leadsGeneratedImprovement').value) / 100;
  const conversionRateImprovement = 1 + parseFloat(document.getElementById('conversionRateImprovement').value) / 100;
  const retainedCustomersImprovement = 1 + parseFloat(document.getElementById('retainedCustomersImprovement').value) / 100;
  const revenuePerCustomerImprovement = 1 + parseFloat(document.getElementById('revenuePerCustomerImprovement').value) / 100;
  const grossMarginImprovement = 1 - parseFloat(document.getElementById('grossMarginImprovement').value) / 100;
  const fixedCostsImprovement = 1 - parseFloat(document.getElementById('fixedCostsImprovement').value) / 100;

  // Perform calculations
  const newCustomers = leadsGenerated * conversionRate;
  const totalCustomers = newCustomers + retainedCustomers;
  const revenue = totalCustomers * revenuePerCustomer;
  const grossProfit = revenue * grossMargin;
  const netProfit = grossProfit - fixedCosts;

  const improvedLeadsGenerated = leadsGenerated * leadsGeneratedImprovement;
  const improvedConversionRate = conversionRate * conversionRateImprovement;
  const improvedNewCustomers = improvedLeadsGenerated * improvedConversionRate;
  const improvedRetainedCustomers = retainedCustomers * retainedCustomersImprovement;
  const improvedTotalCustomers = improvedNewCustomers + improvedRetainedCustomers;
  const improvedRevenuePerCustomer = revenuePerCustomer * revenuePerCustomerImprovement;
  const improvedRevenue = improvedTotalCustomers * improvedRevenuePerCustomer;
  const improvedGrossMargin = grossMargin * grossMarginImprovement;
  const improvedGrossProfit = improvedRevenue * improvedGrossMargin;
  const improvedFixedCosts = fixedCosts * fixedCostsImprovement;
  const improvedNetProfit = improvedGrossProfit - improvedFixedCosts;

  // Update table results
  updateTableResults('newCustomersCurrent', newCustomers);
  updateTableResults('totalCustomersCurrent', totalCustomers);
  updateTableResults('revenueCurrent', revenue);
  updateTableResults('grossProfitCurrent', grossProfit);
  updateTableResults('netProfitCurrent', netProfit);

  updateTableResults('leadsGeneratedImproved', improvedLeadsGenerated);
  updateTableResults('conversionRateImproved', improvedConversionRate * 100);
  updateTableResults('newCustomersImproved', improvedNewCustomers);
  updateTableResults('retainedCustomersImproved', improvedRetainedCustomers);
  updateTableResults('totalCustomersImproved', improvedTotalCustomers);
  updateTableResults('revenuePerCustomerImproved', improvedRevenuePerCustomer);
  updateTableResults('revenueImproved', improvedRevenue);
  updateTableResults('grossMarginImproved', improvedGrossMargin * 100);
  updateTableResults('grossProfitImproved', improvedGrossProfit);
  updateTableResults('fixedCostsImproved', improvedFixedCosts);
  updateTableResults('netProfitImproved', improvedNetProfit);

  // Update chart visualization (if applicable)
});

function updateTableResults(elementId,value) {
  const element = document.getElementById(elementId);
  if (element) {
  element.textContent = value.toFixed(2);
  }
  }
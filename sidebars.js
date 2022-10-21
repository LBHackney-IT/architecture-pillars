module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Architecture Pillars',
      items: [
        {
          'Reliabilty':[
            'production_deployment',
            'preferred_data_source',
            'core_resource_compliance'
          ],
        },
        {
          'Scalibility':[
            'preferred_data_source',
            'auto_scaling'
          ],
        },
        {
          'Security':[
            'core_resource_compliance',
            'dev_least_principles'
          ],
        },
        {
          'Cost Optimisation':[
            'auto_scaling'
          ],
        },
        {
          'High Availability and Performance':[
            'preferred_data_source',
            'production_deployment'
          ],
        },
        {
          'Monitoring and Alerting':[
          ],
        },
        {
          'Development Principles and Quality Assurance':[
            'testing_standards',
            'data_driven',
            'api_compliance',
            'qa_process',
            'repository_standards',
            'minimum_qa_standard',
            'developer_onboarding',
            'data_modelling',
            'adr',
            'api_spec_asessment_process',
            'data_meetup_template'
          ],
        },
      ],
    },
    'contact_us',
  ]
};

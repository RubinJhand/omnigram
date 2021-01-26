Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3002'

    resource '*',
      headers: %w(Authorization),
      expose: %w(Authorization),
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

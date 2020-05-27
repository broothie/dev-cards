FROM ruby:2.5

WORKDIR /usr/src/app
COPY src/rb src/rb
COPY puma.rb .
COPY config.ru .
COPY Gemfile .
COPY Gemfile.lock .
COPY catan.json .

RUN gem install bundler -v '2.1.4'
RUN bundle config set without 'development'
RUN bundle

CMD ["bundle", "exec", "puma", "-C", "puma.rb"]

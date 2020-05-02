FROM ruby:2.5

WORKDIR /usr/src/app
COPY . .

RUN gem install bundler -v '2.1.4'
RUN bundle config set without 'development'
RUN bundle

CMD ["ruby", "app.rb"]

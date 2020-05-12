
def publish(message)
	puts `chore bundle`
	docker
	git(message)
end

def git(message)
	puts `git add -A`
	puts `git commit -m "#{message}"`
	puts `git push`
end

def docker
	puts `docker build . -t gcr.io/catan-274322/catan`
	puts `docker push gcr.io/catan-274322/catan`
end

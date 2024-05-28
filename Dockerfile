from node:18.20.3-alpine3.20

ENV WORKDIR=/usr/storybook

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}

RUN npm install

EXPOSE 6006
EXPOSE 6007
EXPOSE 6008

RUN chmod +x docker_entry.sh

ENTRYPOINT [ "./docker_entry.sh" ]